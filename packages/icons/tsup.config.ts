import { defineConfig } from 'tsup'

export default defineConfig({
  entry: {
    index: 'src/index.ts',
    'v3/index': 'src/components/v3/index.ts',
  },
  format: ['esm', 'cjs'],
  dts: true,
  tsconfig: 'tsconfig.build.json',
  external: ['react', 'react-dom'],
  sourcemap: true,
  minify: true,
  clean: true,
})
