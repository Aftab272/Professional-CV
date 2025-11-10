import { defineConfig } from 'vite'

export default defineConfig({
  base: '/',
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['bootstrap', 'aos', 'gsap']
        }
      }
    }
  },
  server: {
    port: 5173,
    open: true
  }
})