import { saveContactSubmission } from '../../server/db.js'

export const handler = async (event) => {
  const headers = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type',
    'Content-Type': 'application/json',
  }

  if (event.httpMethod === 'OPTIONS') {
    return {
      statusCode: 204,
      headers,
      body: '',
    }
  }

  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 405,
      headers,
      body: JSON.stringify({ success: false, error: 'Method Not Allowed' }),
    }
  }

  try {
    const payload = JSON.parse(event.body || '{}')
    const record = await saveContactSubmission(payload)
    return {
      statusCode: 200,
      headers,
      body: JSON.stringify({ success: true, data: record }),
    }
  } catch (err) {
    console.error('Contact submission error:', err?.message || err)
    return {
      statusCode: 400,
      headers,
      body: JSON.stringify({ success: false, error: err?.message || 'Failed to submit' }),
    }
  }
}
