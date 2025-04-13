import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react';
import sass from 'sass'

export default defineConfig({
  plugins: [react()],
  base: '/', // For subdomain, use root-relative paths
  css: {
    preprocessorOptions: {
      scss: {
        implementation: sass,
      },
    },
  },
  build: {
    outDir: 'dist',
    emptyOutDir: true,
    rollupOptions: {
      output: {
        assetFileNames: 'assets/[name].[hash][extname]',
        entryFileNames: 'assets/[name].[hash].js'
      }
    }
  }  
})