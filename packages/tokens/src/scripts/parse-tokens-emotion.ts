import { join } from 'path'
import { getTokens } from './utils/get-tokens'
import { writeFile } from 'fs/promises'
import { Theme } from '../types/theme'
import formatLeafValue, { mapValues } from './utils/format-leaf-value'
import getTokensFileString from './utils/get-tokens-file-string'
import { toPixel, toRem } from './utils/token-transforms'

/** DTCG `{token.ref}` → JS 템플릿 참조 `${tokenRef}` 변환 (color 카테고리 key 매핑 포함) */
const toTemplateRef = (s: string) =>
  s
    .replaceAll('{', '${')
    .replace(/\$\{colors\.primitive/g, '${primitiveColor')
    .replace(/\$\{colors\.semantic/g, '${semanticColor')

const formatEmotionLeafValue = <T extends object, R>(
  tokens: T,
  callback: (value: LeafValueOf<T>) => R = (value) => value as R,
) => {
  return formatLeafValue(tokens, (value) => {
    const formatted: R = callback(value)
    return typeof formatted === 'string'
      ? toTemplateRef(formatted)
      : mapValues(formatted as Record<string, string>, toTemplateRef)
  })
}

/** Shadow 토큰 → CSS `box-shadow` 문자열 */
const flattenShadow = (tokens: RawTokens['shadow']) =>
  formatEmotionLeafValue(tokens, ({ x, y, blur, spread, color }) => `${x}px ${y}px ${blur}px ${spread}px ${color}`)

const camelToDashed = (str: string) => str.replace(/([A-Z])/g, '-$1').toLowerCase()

/** Typography 토큰 → CSS 선언 문자열 (`font-family: ...; font-size: ...;`) */
const flattenTypography = (tokens: RawTokens['typography']) =>
  formatEmotionLeafValue(tokens, (value) =>
    Object.entries(value)
      .map(([key, val]) => `${camelToDashed(key)}: ${val};`)
      .join(' '),
  )

/**
 * JSON.stringify로 직렬화된 토큰 문자열에서 템플릿 참조를 복원
 *
 * `JSON.stringify`는 `${ref}`를 포함한 문자열을 `'${ref}'`로 직렬화하는데,
 * 이를 실제 JS 템플릿 리터럴(`` `${ref}` ``)로 변환한다.
 * 또한 숫자로 시작하는 key는 bracket notation(`['500']`)으로 변환한다.
 */
const formatStringToTemplateLiteral = (input: string): string => {
  return input.replace(/'([^']*\$\{[^}]+\}[^']*)'/g, (_, match: string) => {
    const transformed = match.replace(/\{([^}]+)\}/g, (_, key: string) => {
      const splitted = key.split('.')
      const last = splitted.pop() || ''
      const formattedLast = /^\d/.test(last) ? `['${last}']` : `.${last}`
      return `{${splitted.join('.')}${formattedLast}}`
    })
    return `\`${transformed}\``
  })
}

const parseTokens = async (theme: Theme = 'dark') => {
  const rawTokens = await getTokens(theme)

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
    textDecoration,
  } = rawTokens

  const tokens = {
    primitiveColor: formatEmotionLeafValue(colors.primitive),
    semanticColor: formatEmotionLeafValue(colors.semantic),
    shadow: flattenShadow(shadow),
    borderWidth: formatEmotionLeafValue(borderWidth, toPixel),
    spacing: formatEmotionLeafValue(spacing, toRem),
    radii: formatEmotionLeafValue(radii, toPixel),
    fontSize: formatEmotionLeafValue(fontSize, toRem),
    letterSpacing: formatEmotionLeafValue(letterSpacing, toPixel),
    lineHeight: formatEmotionLeafValue(lineHeight, toRem),
    fontWeight: formatEmotionLeafValue(fontWeight),
    fontFamily: formatEmotionLeafValue(fontFamily),
    typography: flattenTypography(typography),
    textDecoration: formatEmotionLeafValue(textDecoration),
  }

  const contentStr = await getTokensFileString(tokens)
  const formattedContent = formatStringToTemplateLiteral(contentStr)

  const typesPath = join(__dirname, `../tokens/tokens-emotion-${theme}.ts`)
  await writeFile(typesPath, formattedContent, 'utf-8')
}

parseTokens('dark')
parseTokens('light')
