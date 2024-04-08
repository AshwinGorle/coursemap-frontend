import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    proxy: {
      "/api" : "http://13.48.136.54:8000/api/"
    }
  },
  plugins: [react()],
})
