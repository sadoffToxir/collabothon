import path from 'path';
import { defineConfig } from 'vite';

import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],

  resolve: {
    alias: {
      '@assets': path.posix.resolve(
        path.dirname(new URL(import.meta.url).pathname),
        'src/assets'
      ),
      '@components': path.posix.resolve(
        path.dirname(new URL(import.meta.url).pathname),
        'src/components'
      ),
      '@plugins': path.posix.resolve(
        path.dirname(new URL(import.meta.url).pathname),
        'src/plugins'
      ),
      '@styles': path.posix.resolve(
        path.dirname(new URL(import.meta.url).pathname),
        'src/styles'
      ),
    },
  },
});
