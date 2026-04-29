import { defineConfig } from '@pandacss/dev'
import { preset } from '@/theme'

export default defineConfig({
  preflight: true,
  syntax: 'object-literal',
  jsxFramework: 'react',
  jsxFactory: 'styled',
  jsxStyleProps: 'minimal',
  staticCss: {
    css: [
      {
        properties: {
          alignItems: ['*'],
          justifyContent: ['*'],
          flexDirection: ['*'],
          flexWrap: ['*'],
          flexFlow: ['*'],
          flexBasis: ['*'],
          flexGrow: ['*'],
          flexShrink: ['*'],
          gap: ['*'],
          columnGap: ['*'],
          rowGap: ['*'],
        },
        conditions: ['light', 'dark'],
      },
    ],
  },

  include: ['./src/**/*.{js,jsx,ts,tsx}', './stories/**/*.{js,jsx,ts,tsx}'],

  exclude: [],

  presets: [preset],

  outdir: 'styled-system',
  polyfill: true,
  clean: true,
})
