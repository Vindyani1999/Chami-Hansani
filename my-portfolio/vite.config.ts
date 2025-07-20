import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Replace 'your-github-username' and 'repo-name' accordingly
export default defineConfig({
  plugins: [react()],
  base: '/repo-name/', // <-- base path for GitHub Pages
})
