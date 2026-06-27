import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  // Use VITE_BASE_PATH for GitHub Pages project sites (e.g. /personal-website/)
  // Defaults to / for Vercel, Netlify, and custom domains
  base: process.env.VITE_BASE_PATH || '/',
  plugins: [react(), tailwindcss()],
})
