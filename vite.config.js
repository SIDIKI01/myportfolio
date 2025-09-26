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
    minify: 'terser',
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['scripts/main.js', 'scripts/navigation.js'],
          components: ['scripts/skills.js', 'scripts/projects.js', 'scripts/theme.js'],
          forms: ['scripts/form.js']
        }
      }
    }
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
