import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
    root: 'src', // Change this to the directory where your index.html is located
    plugins: [react()],
    build: {
        outDir: '../dist/client', // Adjust this path if needed
    },
})
