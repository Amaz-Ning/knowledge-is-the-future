import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import {visualizer} from 'rollup-plugin-visualizer'

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    minify: 'esbuild',
    target: 'modules',
    terserOptions: {}
  },
  plugins: [react(), visualizer({
    open: true
  })],
})
