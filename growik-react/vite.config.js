import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: '0.0.0.0',
    port: 5173,
    allowedHosts: [
      '5173-it4zcurlmkk9gdv7ned7f-d32d5549.us2.manus.computer',
      '.manus.computer'
    ]
  }
})
