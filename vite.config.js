import { defineConfig } from 'vite'

export default defineConfig({
  appType: 'mpa',
  build: {
    rollupOptions: {
      input: {
        main: 'index.html',
        v1: 'v1.html',
        pd: 'pd/index.html',
        pitchdeck: 'pitchdeck/index.html'
      }
    }
  }
})
