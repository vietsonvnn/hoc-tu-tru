import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    chunkSizeWarningLimit: 1000, // Tăng limit từ 500KB lên 1000KB
    rollupOptions: {
      output: {
        manualChunks: {
          // Tách react và react-dom ra chunk riêng
          'react-vendor': ['react', 'react-dom'],
          // Tách framer-motion ra chunk riêng
          'animation-vendor': ['framer-motion'],
        },
      },
    },
  },
})
