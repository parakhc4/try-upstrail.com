import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// Multi-page: each solution is a real HTML entry, so deep links work on any
// static host with no rewrite rules and no router dependency. Inputs are
// resolved relative to the project root.
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
  ],
  build: {
    rollupOptions: {
      input: {
        home: 'index.html',
        productionPlanning: 'solutions/production-planning/index.html',
        demandPlanning: 'solutions/demand-planning/index.html',
      },
    },
  },
})
