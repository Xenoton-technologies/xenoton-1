import pg from 'pg'
import dotenv from 'dotenv'

dotenv.config()

const { Pool } = pg

function parsePgUrl(rawUrl) {
  if (!rawUrl) return null
  // Handles postgresql://user:password@host:port/database where password can contain @
  const match = rawUrl.match(/^postgresql:\/\/([^:]+):(.+)@([^@:]+):(\d+)\/(.+)$/)
  if (match) {
    return {
      user: match[1],
      password: decodeURIComponent(match[2]),
      host: match[3],
      port: parseInt(match[4], 10),
      database: match[5],
      ssl: { rejectUnauthorized: false },
      connectionTimeoutMillis: 10000,
    }
  }
  return {
    connectionString: rawUrl,
    ssl: { rejectUnauthorized: false },
    connectionTimeoutMillis: 10000,
  }
}

// Supabase Connection Pooler (works reliably across IPv4 & IPv6 networks)
const poolConfig = parsePgUrl(
  process.env.DATABASE_URL ||
  'postgresql://postgres.qdghvmlaeijqalaswfzs:FuMnrmTcYfLN@aws-0-ap-northeast-1.pooler.supabase.com:6543/postgres'
)

// Fallback session pooler on port 5432 if port 6543 is restricted
const sessionPoolConfig = parsePgUrl(
  process.env.DATABASE_URL_SESSION ||
  'postgresql://postgres.qdghvmlaeijqalaswfzs:FuMnrmTcYfLN@aws-0-ap-northeast-1.pooler.supabase.com:5432/postgres'
)

let primaryPool = poolConfig ? new Pool(poolConfig) : null
let sessionPool = sessionPoolConfig ? new Pool(sessionPoolConfig) : null

let tableInitialized = false

async function getClient() {
  if (primaryPool) {
    try {
      const client = await primaryPool.connect()
      return client
    } catch (err) {
      console.warn('Primary pooler (port 6543) failed, trying session pooler (port 5432)...', err.message)
    }
  }

  if (sessionPool) {
    return await sessionPool.connect()
  }

  throw new Error('No database pool configured.')
}

export async function ensureTableExists() {
  if (tableInitialized) return
  const client = await getClient()
  try {
    const query = `
      CREATE TABLE IF NOT EXISTS contact_submissions (
        id SERIAL PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        email VARCHAR(255) NOT NULL,
        phone VARCHAR(50),
        company VARCHAR(255),
        project_type VARCHAR(100) NOT NULL,
        message TEXT NOT NULL,
        created_at TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP
      );
    `
    await client.query(query)
    tableInitialized = true
  } finally {
    client.release()
  }
}

export async function saveContactSubmission(data) {
  const { name, email, phone, company, projectType, message } = data

  if (!name || !name.trim()) throw new Error('Name is required.')
  if (!email || !email.trim()) throw new Error('Email is required.')
  if (!projectType || !projectType.trim()) throw new Error('Project type is required.')
  if (!message || !message.trim()) throw new Error('Message is required.')

  await ensureTableExists()

  const client = await getClient()
  try {
    const query = `
      INSERT INTO contact_submissions (name, email, phone, company, project_type, message)
      VALUES ($1, $2, $3, $4, $5, $6)
      RETURNING id, name, email, created_at;
    `
    const values = [
      name.trim(),
      email.trim(),
      phone?.trim() || null,
      company?.trim() || null,
      projectType.trim(),
      message.trim(),
    ]

    const result = await client.query(query, values)
    return result.rows[0]
  } finally {
    client.release()
  }
}
