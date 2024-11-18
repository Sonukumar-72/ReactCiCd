// import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react'

// // https://vite.dev/config/
// export default defineConfig({
//   plugins: [react()],
//   test: {
//     globals: true,
//     environment : 'jsdom',
//     setupFiles: './src/setupTests.js',
//     exclude:[...configDefaults.exclude, 'e2e/*'],
//   },
// })
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,
    environment: 'jsdom', // Required for React components
    setupFiles: './src/setupTests.js', // If setupTests.js is used
  },
});
