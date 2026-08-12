import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
  ],
  base: '/', // Cambiado a '/' porque ahora usas un dominio personalizado (osonauta.com)
  
  // Configuraciones de seguridad y optimización para Producción
  build: {
    // Asegura que no se generen mapas de código (Source Maps). 
    // Esto evita que cualquiera pueda ver tu código fuente original desde las DevTools del navegador.
    sourcemap: false
  }
});
