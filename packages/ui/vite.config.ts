import { defineConfig as defineVitestConfig } from 'vitest/config'
import react from '@vitejs/plugin-react'
import dts from 'vite-plugin-dts'
import viteTsconfigPaths from 'vite-tsconfig-paths'
import { viteStaticCopy } from 'vite-plugin-static-copy'
import { visualizer } from 'rollup-plugin-visualizer'

const isStorybook = process.env.VITE_IS_STORYBOOK === 'true'

export default defineVitestConfig({
  plugins: [
    react(),
    viteTsconfigPaths(),
    dts({
      entryRoot: 'src',
      tsconfigPath: './tsconfig.json',
      insertTypesEntry: true,
      outDir: 'dist/types',
      copyDtsFiles: true,
      include: ['src/**/*', 'styled-system/**/*'],
      bundledPackages: ['@ark-ui/react'],
      compilerOptions: {
        preserveSymlinks: true,
        skipLibCheck: true,
      },
    }),
    !isStorybook &&
      viteStaticCopy({
        targets: [{ src: 'styled-system', dest: '' }],
      }),
    visualizer({
      open: true,
      filename: 'dist/stats.html',
      gzipSize: true,
      brotliSize: true,
    }),
  ],
  build: {
    lib: {
      entry: 'src/index.ts',
      name: '@nation-a/ui',
      fileName: (format) => `index.${format === 'es' ? 'js' : format}`,
      formats: ['es', 'cjs'],
    },
    rollupOptions: {
      treeshake: true,
      external: isStorybook
        ? []
        : ['react', 'react-dom', /react-dom\/.*/, /^react\/.*/, '@nation-a/icons', '@nation-a/tokens', '@pandacss/dev'],
      output: {
        inlineDynamicImports: false,
      },
    },
    outDir: 'dist',
    sourcemap: true,
    minify: 'esbuild',
    target: 'esnext',
  },
  test: {
    globals: true,
    environment: 'happy-dom',
    setupFiles: ['./src/test/setup.ts'],
    css: true,
    include: ['src/**/*.{test,spec}.{ts,tsx}'],
    coverage: {
      provider: 'v8',
      reporter: ['text', 'html'],
      exclude: ['node_modules/', 'src/test/'],
    },
  },
})
