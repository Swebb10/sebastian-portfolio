import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: './',
  // Local builds and Vercel preview deployments must not inflate real traffic.
  define: {
    __ANALYTICS_ENABLED__: JSON.stringify(process.env.VERCEL_ENV === 'production'),
  },
})
