import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      // Fix Leaflet assets loading
      'leaflet': 'leaflet/dist/leaflet.js',
    },
  },
});
