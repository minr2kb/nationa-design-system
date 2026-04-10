import { join } from 'path'
import { getTokens } from './utils/get-tokens'
import { writeFile } from 'fs/promises'
import formatLeafValue from './utils/format-leaf-value'
import getTokensFileString from './utils/get-tokens-file-string'
import { toPixel, toRem } from './utils/token-transforms'

type PandaLeaf = { value: string | { base: string; _dark: string } }
type PandaTree = Tree<PandaLeaf>

/**
 * 토큰 트리의 leaf `$value`를 변환하여 Panda CSS 형식 `{ value: R }`으로 래핑
 * @param callback 생략 시 `$value`를 그대로 사용
 */
export const formatPandaLeafValue = <T extends object, R>(
  tokens: T,
  callback: (value: LeafValueOf<T>) => R = (value) => value as R,
): PandaTree => {
  return formatLeafValue(tokens, (value) => ({ value: callback(value) })) as PandaTree
}

/** Shadow 토큰 → `'xpx ypx blurpx spreadpx color'` */
const flattenShadow = (shadow: RawTokens['shadow']) =>
  formatPandaLeafValue(
    shadow,
    ({ x, y, blur, spread, color }) => `${x}px ${y}px ${blur}px ${spread}px ${color.replace('.semantic', '')}`,
  )

/** Typography 토큰 → `{ fontFamily, fontWeight, ... }` 객체 (참조 prefix 정리) */
const flattenTypography = (typography: RawTokens['typography']) =>
  formatPandaLeafValue(typography, (value) =>
    Object.entries(value).reduce<Record<string, string>>((acc, [k, v]) => {
      acc[k] = v.replace(`{${k}.`, '').replace('}', '')
      return acc
    }, {}),
  )

/** Semantic color 참조 문자열에서 `.primitive` 제거 (`{colors.primitive.red}` → `{colors.red}`) */
const removePrimitive = (colors: RawTokens['colors']['semantic']) =>
  formatPandaLeafValue(colors, (value) => value.replace('.primitive', ''))

/**
 * light/dark 트리를 합쳐 Panda CSS 조건 토큰 생성
 * - `base === _dark` → `{ value: base }` (단일 값)
 * - `base !== _dark` → `{ value: { base, _dark } }` (조건 값)
 */
const combineThemeValues = (lightValues: PandaTree, darkValues: PandaTree): PandaTree => {
  const combined: PandaTree = {}

  for (const [key, lightValue] of Object.entries(lightValues)) {
    if ('value' in lightValue) {
      const { value: base } = lightValue
      const darkEntry = darkValues[key]
      const _dark = darkEntry && 'value' in darkEntry ? darkEntry.value : ''
      combined[key] = (base === _dark ? { value: base } : { value: { base, _dark } }) as PandaLeaf
    } else {
      combined[key] = combineThemeValues(
        lightValue as Tree<{ value: string }>,
        darkValues[key] as Tree<{ value: string }>,
      )
    }
  }

  return combined
}

const parseTokens = async () => {
  const rawLightTokens = await getTokens('light')
  const rawDarkTokens = await getTokens('dark')

  const {
    colors,
    shadow,
    typography,
    lineHeight,
    fontSize,
    letterSpacing,
    borderWidth,
    spacing,
    radii,
    fontWeight,
    fontFamily,
    // textDecoration,
  } = rawDarkTokens

  const semantic = {
    colors: combineThemeValues(
      removePrimitive(rawLightTokens.colors.semantic) as PandaTree,
      removePrimitive(rawDarkTokens.colors.semantic) as PandaTree,
    ),
    shadows: flattenShadow(shadow),
  }

  const primitive = {
    colors: formatPandaLeafValue(colors.primitive),
    borderWidths: formatPandaLeafValue(borderWidth, toPixel),
    spacing: formatPandaLeafValue(spacing, toRem),
    radii: formatPandaLeafValue(radii, toPixel),
    fontSizes: formatPandaLeafValue(fontSize, toRem),
    letterSpacings: formatPandaLeafValue(letterSpacing, toRem),
    lineHeights: formatPandaLeafValue(lineHeight, toRem),
    fontWeights: formatPandaLeafValue(fontWeight),
    fonts: formatPandaLeafValue(fontFamily),
    // textDecorations: textDecoration,
  }
  const textStyles = flattenTypography(typography)

  const tokens = { semantic, primitive, textStyles }

  const formattedContent = await getTokensFileString(tokens)

  const typesPath = join(__dirname, '../tokens/tokens-panda.ts')
  await writeFile(typesPath, formattedContent, 'utf-8')
}

parseTokens()
