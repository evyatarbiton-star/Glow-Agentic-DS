import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path'
import dts from 'vite-plugin-dts'

export default defineConfig({
  plugins: [
    react({ jsxRuntime: 'automatic' }),
    dts({
      include: ['lib/**/*.ts', 'src/components/**/*.ts', 'src/components/**/*.tsx', 'tokens/**/*.ts'],
      outDir: 'dist',
      tsconfigPath: './tsconfig.lib.json',
    }),
  ],
  build: {
    lib: {
      entry: {
        index: resolve(__dirname, 'lib/index.ts'),
        components: resolve(__dirname, 'lib/components.ts'),
        tokens: resolve(__dirname, 'lib/tokens.ts'),
      },
      formats: ['es'],
    },
    rollupOptions: {
      external: ['react', 'react-dom', 'react/jsx-runtime'],
    },
    outDir: 'dist',
    emptyOutDir: true,
  },
})
