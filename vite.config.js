import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// GitHub Pages project-site configuration
export default defineConfig({
  base: '/access-homecare-ghana-new/',
  plugins: [react()],
})
