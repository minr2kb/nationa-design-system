import { join } from 'path'
import { getTokens } from './utils/get-tokens'
import { writeFile } from 'fs/promises'
import { formatLeafValue } from './utils/format-leaf-value'
import getTokensFileString from './utils/get-tokens-file-string'

// light/dark 테마를 합친 semantic 색상 타입
type PandaLeaf = { value: string | { base: string; _dark: string } }
type PandaTree = Tree<PandaLeaf>

// callback의 value 타입이 LeafValueOf<T>로 추론되고, 결과를 { value: R }로 래핑
export const formatPandaLeafValue = <T extends object, R>(
  tokens: T,
  callback: (value: LeafValueOf<T>) => R = (value) => value as R,
): PandaTree => {
  return formatLeafValue(tokens, (value) => ({ value: callback(value) })) as PandaTree
}

// shadow $value(Value2) → { value: 'xpx ypx blurpx spreadpx color' }
// Value2의 프로퍼티를 직접 접근하므로 formatPandaLeafValue 대신 직접 구성
const flattenShadow = (shadow: RawTokens['shadow']) =>
  formatPandaLeafValue(
    shadow,
    ({ x, y, blur, spread, color }) => `${x}px ${y}px ${blur}px ${spread}px ${color.replace('.semantic', '')}`,
  )

// 숫자 문자열 $value → { value: '${n}px' }
const getPixelValues = <T extends object>(tokens: T) => formatPandaLeafValue(tokens, (value) => `${value}px`)

// 숫자 문자열 $value → { value: '${n/16}rem' }
const getRemValues = <T extends object>(tokens: T) =>
  formatPandaLeafValue(tokens, (value) => `${Number(value) / 16}rem`)

// semantic color 참조에서 '.primitive' 제거
// LeafValueOf<Semantic> = string → value 타입이 string으로 추론
const removePrimitive = (colors: RawTokens['colors']['semantic']) =>
  formatPandaLeafValue(colors, (value) => value.replace('.primitive', ''))

// typography $value(Value) → { value: { fontFamily, fontWeight, ... } } (참조 prefix 정리)
// LeafValueOf<Typography> = Value → value 타입이 Value로 추론, Object.entries 직접 사용 가능
const flattenTypography = (typography: RawTokens['typography']) =>
  formatPandaLeafValue(typography, (value) =>
    Object.entries(value).reduce<Record<string, string>>((acc, [k, v]) => {
      acc[k] = v.replace(`{${k}.`, '').replace('}', '')
      return acc
    }, {}),
  )

// light/dark 테마 값 합치기
// { value: 'lightColor' } + { value: 'darkColor' } → { value: { base, _dark } }
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
    borderWidths: getPixelValues(borderWidth),
    spacing: getRemValues(spacing),
    radii: getPixelValues(radii),
    fontSizes: getRemValues(fontSize),
    letterSpacings: getPixelValues(letterSpacing),
    lineHeights: getRemValues(lineHeight),
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
