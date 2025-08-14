// vite.config.js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/trivia-cafh-modulo3-app/', 
  plugins: [react()],
})
