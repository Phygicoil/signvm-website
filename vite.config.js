import { defineConfig } from 'vite'

export default defineConfig({
  appType: 'mpa',
  build: {
    rollupOptions: {
      input: {
        main: 'index.html',
        v1: 'v1.html',
        v2: 'v2.html',
        v3: 'v3.html',
        six: '6.html',
        onec: '1c.html',
        pd: 'pd/index.html',
        pitchdeck: 'pitchdeck/index.html'
      }
    }
  }
})
