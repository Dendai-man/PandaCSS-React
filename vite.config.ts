import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: '0.0.0.0',
    port: 12000,
    strictPort: true,
    hmr: {
      clientPort: 443,
      host: 'work-1-brhfplzsaaixawge.prod-runtime.all-hands.dev',
    },
    cors: {
      origin: '*',
    },
    allowedHosts: [
      'work-1-brhfplzsaaixawge.prod-runtime.all-hands.dev',
      'work-2-brhfplzsaaixawge.prod-runtime.all-hands.dev'
    ],
  },
})