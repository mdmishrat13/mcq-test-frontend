import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/api': {
        target: 'https://e-learning-server-git-main-mdmishrat13s-projects.vercel.app',
        changeOrigin: true,
        secure: false
      }
    }
  }
})
