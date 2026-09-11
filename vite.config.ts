import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      input: {
        main: 'index.html',
        work: 'work/index.html',
        about: 'about/index.html',
        contact: 'contact/index.html',
      },
    },
  },
})
