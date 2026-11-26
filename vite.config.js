import { copyFileSync } from 'node:fs';
import { resolve } from 'node:path';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

/**
 * GitHub Pages has no SPA rewrites, so we ship a copy of index.html as 404.html.
 * Deep links such as /contact are then served by the app instead of GitHub's 404 page.
 */
function spaFallback() {
  let outDir;
  return {
    name: 'spa-fallback',
    apply: 'build',
    configResolved(config) {
      outDir = resolve(config.root, config.build.outDir);
    },
    closeBundle() {
      copyFileSync(resolve(outDir, 'index.html'), resolve(outDir, '404.html'));
    },
  };
}

export default defineConfig({
  // BASE_PATH is set by the deploy workflow (e.g. "/valien/" on GitHub Pages).
  base: process.env.BASE_PATH || '/',
  plugins: [react(), spaFallback()],
  resolve: {
    alias: { '@': resolve(import.meta.dirname, 'src') },
  },
  server: { port: 3000, host: true },
});
