import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
    proxy: {
      '/api': {
        target: 'http://localhost:8000',
        changeOrigin: true,
      },
    },
  },
  define: {
    __COMMIT_SHA__: JSON.stringify(process.env.VITE_COMMIT_SHA || 'dev'),
    __BUILD_TIMESTAMP__: JSON.stringify(process.env.VITE_BUILD_TIMESTAMP || new Date().toISOString().replace('T', ' ').substring(0, 19)),
  },
})

