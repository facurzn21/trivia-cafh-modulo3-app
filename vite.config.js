// vite.config.js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/trivia-cafh-modulo3-app/',
  plugins: [react()],
  
  // Configuración para desarrollo
  server: {
    headers: {
      // Headers para prevenir caché en desarrollo
      'Cache-Control': 'no-store, no-cache, must-revalidate, proxy-revalidate',
      'Pragma': 'no-cache',
      'Expires': '0',
      'Surrogate-Control': 'no-store'
    }
  },
  
  // Configuración para producción
  build: {
    // Limpiar el directorio de salida antes de construir
    emptyOutDir: true,
    
    // Generar nombres de archivo únicos con hash
    rollupOptions: {
      output: {
        // Agregar hash a los nombres de archivo para romper caché
        entryFileNames: `assets/[name]-[hash].js`,
        chunkFileNames: `assets/[name]-[hash].js`,
        assetFileNames: `assets/[name]-[hash].[ext]`,
        
        // Configuración manual de chunks para mejor control
        manualChunks: {
          // Separar las dependencias de React en su propio chunk
          'react-vendor': ['react', 'react-dom'],
        }
      }
    },
    
    // Incrementar el límite de advertencia de tamaño si es necesario
    chunkSizeWarningLimit: 1000,
    
    // Generar sourcemaps para debugging (opcional)
    sourcemap: false,
    
    // Asegurar que se regeneren los assets
    assetsInlineLimit: 0,
  },
  
  // Optimizaciones
  optimizeDeps: {
    // Forzar re-optimización de dependencias
    force: true,
  }
})