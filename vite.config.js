import { resolve } from 'node:path';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: { '@': resolve(import.meta.dirname, 'src') },
  },
  define: {
    // "production" | "preview" | "development" – controls pending content (src/config/publishing.js).
    'import.meta.env.VITE_SITE_ENV': JSON.stringify(process.env.VERCEL_ENV || 'development'),
  },
  server: { port: 3000, host: true },
});
