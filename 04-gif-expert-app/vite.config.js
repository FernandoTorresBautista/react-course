import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  publicPath: process.env.NODE_ENV === 'production'
  ? '/testPages/'
  : '/',
  base: '/testPages/',
  plugins: [react()]
})
