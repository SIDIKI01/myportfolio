import { defineConfig } from 'vite'

export default defineConfig({
  // Configuration de base
  base: './',
  
  // Serveur de développement
  server: {
    port: 3000,
    open: true,
    host: true
  },
  
  // Build
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    sourcemap: false,
    minify: 'esbuild', // Utiliser esbuild au lieu de terser pour éviter les erreurs
    rollupOptions: {
      output: {
        manualChunks: undefined // Simplifier la configuration des chunks
      }
    },
    // Optimisations pour Netlify
    target: 'es2015',
    cssCodeSplit: true,
    chunkSizeWarningLimit: 1000
  },
  
  // Optimisations
  optimizeDeps: {
    include: []
  },
  
  // CSS
  css: {
    devSourcemap: true
  },
  
  // Plugins
  plugins: [],
  
  // Prévisualisation
  preview: {
    port: 4173,
    host: true
  }
})
