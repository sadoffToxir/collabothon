import path from 'path';
import { defineConfig } from 'vite'

import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],

  resolve: {
    alias: {
      '@components': path.resolve(path.dirname(new URL(import.meta.url).pathname), 'src/components'),
      '@plugins': path.resolve(path.dirname(new URL(import.meta.url).pathname), 'src/plugins'),
      '@styles': path.resolve(path.dirname(new URL(import.meta.url).pathname), 'src/styles'),
    }
  },
})
