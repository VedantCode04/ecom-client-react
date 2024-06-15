
import react from '@vitejs/plugin-react'
import { defineConfig, loadEnv } from 'vite'
import dotenv from 'dotenv';
dotenv.config();
export default defineConfig({
  plugins: [react()],
  define: {
  'process.env.SOME_ENV': `"${process.env.SOME_ENV}"`
}
})
