import { defineConfig } from 'vite'
import { resolve } from 'path'

export default defineConfig({
  appType: 'mpa',
  server: {
    fs: {
      strict: false
    }
  },
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        v1: resolve(__dirname, 'v1.html'),
        pd: resolve(__dirname, 'pd/index.html'),
        pitchdeck: resolve(__dirname, 'pitchdeck/index.html')
      }
    }
  }
})
