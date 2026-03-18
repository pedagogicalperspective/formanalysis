import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// ⚠️  base = GitHub repo adınız (başında ve sonunda / olmalı)
// Repo: pedagogicalperspective/formanalysis
export default defineConfig({
  plugins: [react()],
  base: '/formanalysis/',
})
