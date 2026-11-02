import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';
import { resolve } from 'path';

export default defineConfig({
  plugins: [react(), tailwindcss()],
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        airport: resolve(__dirname, 'airport-taxi.html'),
        local: resolve(__dirname, 'local-taxi.html'),
        outstation: resolve(__dirname, 'outstation-taxi.html'),
      },
    },
  },
});
