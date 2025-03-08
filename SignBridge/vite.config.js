// import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react'
// import tailwindcss from '@tailwindcss/vite'

// // https://vite.dev/config/
// export default defineConfig({
//   plugins: [react(),tailwindcss()],
// })
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [react(), tailwindcss()],
  build: {
    chunkSizeWarningLimit: 1500, // Increases limit to avoid warnings
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes("node_modules")) {
            if (id.includes("@tensorflow")) return "tensorflow"; // Separate TensorFlow.js
            if (id.includes("fingerpose")) return "fingerpose"; // Separate Fingerpose
            if (id.includes("react")) return "react"; // Separate React
            return "vendor"; // Other dependencies
          }
        },
      },
    },
  },
  optimizeDeps: {
    exclude: ["@tensorflow/tfjs"], // Prevents TensorFlow from being pre-bundled
  },
});