import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Configuração básica para Vite + React
export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist'
  }
})
