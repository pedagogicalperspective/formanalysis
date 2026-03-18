import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// ⚠️  base değerini GitHub repo adınızla eşleştirin.
// Örnek: repo adı "form-analiz-araci" ise base: '/form-analiz-araci/'
// Repo adını değiştirdiyseniz burayı da güncelleyin.
export default defineConfig({
  plugins: [react()],
  base: '/formanalysis/',
})
