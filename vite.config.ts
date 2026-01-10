import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          // Split React and React DOM into separate chunk
          'react-vendor': ['react', 'react-dom'],
          // Split React Router into separate chunk
          'router': ['react-router-dom'],
          // Split form libraries into separate chunk
          'forms': ['react-hook-form', '@hookform/resolvers', 'zod'],
          // Split UI libraries into separate chunk
          'ui-libs': ['lucide-react', 'motion'],
        },
      },
    },
    // Increase chunk size warning limit to 1000 kB (optional)
    chunkSizeWarningLimit: 1000,
  },
});
