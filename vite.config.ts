import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import path from 'path'

export default defineConfig({
  // GitHub Pages subdirectory base path - critical for asset resolution
  base: '/yugi_store/',

  plugins: [
    react(),
    tailwindcss(),
  ],

  resolve: {
    alias: {
      '@': path.resolve(import.meta.dirname, 'src'),
    },
    dedupe: ['react', 'react-dom'],
  },

  build: {
    // Output directory must be 'dist' for GitHub Pages workflow compatibility
    outDir: 'dist',
    // Internal assets subdirectory
    assetsDir: 'assets',
    // Empty the output directory before building
    emptyOutDir: true,
    // Optimize chunk sizes
    chunkSizeWarningLimit: 1000,
    // Enable CSS code splitting for better caching
    cssCodeSplit: true,
    // Prevent small files from being inlined as base64
    assetsInlineLimit: 4096,
    // Source maps for production debugging (optional)
    sourcemap: false,
    // Configure rollup options for optimization
    rollupOptions: {
      output: {
        // Ensure consistent asset naming
        entryFileNames: 'assets/[name].[hash].js',
        chunkFileNames: 'assets/[name].[hash].js',
        assetFileNames: 'assets/[name].[hash].[ext]',
      },
    },
  },

  server: {
    port: 5173,
    strictPort: false,
    host: '0.0.0.0',
    allowedHosts: true,
  },

  preview: {
    port: 5173,
    host: '0.0.0.0',
    allowedHosts: true,
  },
})
