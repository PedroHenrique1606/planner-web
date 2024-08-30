import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/api': {
        target: 'https://plannernodeapi.onrender.com', // Seu back-end real
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ''), // Reescreve a URL, removendo '/api' do início do caminho
      },
    },
  },
})
