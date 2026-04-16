/**
 * SVGR 기반 아이콘 생성 스크립트
 */

import fs from 'fs'
import path from 'path'
import { transform } from '@svgr/core'

// ─── Types ────────────────────────────────────────────────────────────────────

type IconaIcon = {
  svg: string
  name: string
  metadatas: string[]
  png: Record<string, string>
}

// ─── Paths ────────────────────────────────────────────────────────────────────

const OUTPUT_PATH = path.resolve('src/components')
const ICONS_JSON_PATH = path.resolve('../../.icona/icons.json')

// ─── Transform ────────────────────────────────────────────────────────────────

const svgToComponent = (svgContent: string, componentName: string): Promise<string> =>
  transform(
    svgContent,
    {
      typescript: true,
      jsxRuntime: 'automatic',
      template: (variables, { tpl }) => tpl`
        ${variables.imports};
        ${variables.interfaces};

        type IconProps = SVGProps<SVGSVGElement> & { size?: number }
    
        const ${variables.componentName} = ({ size = 24, ...props }: IconProps) => (
            ${variables.jsx}
        );
            
        ${variables.exports};
      `,
      expandProps: 'end',
      plugins: ['@svgr/plugin-svgo', '@svgr/plugin-jsx', '@svgr/plugin-prettier'],
      svgProps: {
        name: componentName,
        strokeWidth: '0',
        width: '{size}',
        height: '{size}',
      },
      svgoConfig: {
        plugins: [
          {
            name: 'preset-default',
            params: { overrides: { removeViewBox: false } },
          },
          { name: 'removeAttrs', params: { attrs: ['width', 'height'] } },
          { name: 'convertColors', params: { currentColor: /^(?!none$)/ } },
        ],
      },
    },
    { componentName },
  )

// ─── Name Utils ───────────────────────────────────────────────────────────────

const removeInvalidCharacters = (str: string) => str.replace(/[^a-zA-Z0-9-_ ]/g, '').replace(/\s+/g, '-')

const toPascalCase = (str: string) =>
  str
    .replace(/([-_][a-z0-9])/g, (group) => group.replaceAll('-', '').replaceAll('_', '').toUpperCase())
    .replace(/^[a-z]/, (c) => c.toUpperCase())

const getIconName = (name: string) => `${toPascalCase(removeInvalidCharacters(name)).replace(/V3$/, '')}Icon`

// ─── Generation ───────────────────────────────────────────────────────────────

const generateIconFile = async (icon: IconaIcon) => {
  const isV3 = /v3/i.test(icon.name)
  const targetPath = isV3 ? path.join(OUTPUT_PATH, 'v3') : OUTPUT_PATH
  fs.mkdirSync(targetPath, { recursive: true })

  const componentName = getIconName(icon.name)
  const code = await svgToComponent(icon.svg, componentName)
  fs.writeFileSync(path.join(targetPath, `${componentName}.tsx`), code)
}

const processIcons = async () => {
  const iconsData: Record<string, IconaIcon> = JSON.parse(fs.readFileSync(ICONS_JSON_PATH, 'utf8'))
  const icons = Object.values(iconsData).filter((icon) => icon.name && icon.svg)
  await Promise.all(icons.map(generateIconFile))
  console.log(`Icon files have been generated in ${OUTPUT_PATH}`)
}

processIcons().catch(console.error)
