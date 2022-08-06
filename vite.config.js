// vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'path';

export default defineConfig({
  server: { port: 3000 },
  plugins: [react()],
  resolve: {
    alias: {
      '@/components': resolve(__dirname, './src/components'),
      '@/gen': resolve(__dirname, './src/gen'),
      '@/data': resolve(__dirname, './src/data'),
      '@/utils': resolve(__dirname, './src/utils'),
      '@/lib': resolve(__dirname, './src/lib')
    }
  }
});
