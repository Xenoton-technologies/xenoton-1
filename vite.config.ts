import path from 'node:path'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { defineConfig, type Plugin } from 'vite'

function contactApiPlugin(): Plugin {
  return {
    name: 'contact-api-plugin',
    configureServer(server) {
      server.middlewares.use('/api/contact', async (req, res, next) => {
        if (req.method === 'POST') {
          let body = ''
          req.on('data', (chunk) => {
            body += chunk
          })
          req.on('end', async () => {
            try {
              const { saveContactSubmission } = await import('./server/db.js')
              const payload = JSON.parse(body)
              const record = await saveContactSubmission(payload)
              res.setHeader('Content-Type', 'application/json')
              res.statusCode = 200
              res.end(JSON.stringify({ success: true, data: record }))
            } catch (err: any) {
              res.setHeader('Content-Type', 'application/json')
              res.statusCode = 400
              res.end(JSON.stringify({ success: false, error: err.message }))
            }
          })
        } else {
          next()
        }
      })
    },
  }
}

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss(), contactApiPlugin()],
  resolve: {
    alias: {
      '@': path.resolve(import.meta.dirname, './src'),
    },
  },
  server: {
    allowedHosts: ['.ngrok-free.app'],
  },
})
