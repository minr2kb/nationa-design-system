import { join } from 'path'
import { getTokens } from './utils/get-tokens'
import { writeFile } from 'fs/promises'
import { Theme } from '../types/theme'
import { formatLeafValue, mapValues } from './utils/format-leaf-value'
import getTokensFileString from './utils/get-tokens-file-string'

const formatEmotionLeafValue = <T extends object, R>(
  tokens: T,
  callback: (value: LeafValueOf<T>) => R = (value) => value as R,
) => {
  return formatLeafValue(tokens, (value) => {
    const formatted: R = callback(value)
    return typeof formatted === 'string'
      ? formatted.replaceAll('{', '${')
      : mapValues(formatted as Record<string, string>, (v) => v.replaceAll('{', '${'))
  })
}

const camelToDashed = (str: string) => str.replace(/([A-Z])/g, '-$1').toLowerCase()

// shadow $value(Value2) → CSS box-shadow 문자열
const flattenShadow = (tokens: RawTokens['shadow']) =>
  formatEmotionLeafValue(tokens, ({ x, y, blur, spread, color }) => `${x}px ${y}px ${blur}px ${spread}px ${color}`)

// typography $value(Value) → CSS 선언 문자열
const flattenTypography = (tokens: RawTokens['typography']) =>
  formatEmotionLeafValue(tokens, (value) =>
    Object.entries(value)
      .map(([key, val]) => `${camelToDashed(key)}: ${val};`)
      .join(' '),
  )

// 숫자 문자열 $value → '${n}px'
const getPixelValues = <T extends object>(tokens: T) => formatEmotionLeafValue(tokens, (value) => `${value}px`)

// 숫자 문자열 $value → '${n/16}rem'
const getRemValues = <T extends object>(tokens: T) =>
  formatEmotionLeafValue(tokens, (value) => `${Number(value) / 16}rem`)

const formatStringToTemplateLiteral = (input: string): string => {
  return input.replace(/'([^']*\$\{[^}]+\}[^']*)'/g, (_, match: string) => {
    const transformed = match.replace(/\{([^}]+)\}/g, (_, key: string) => {
      const splitted = key.split('.')
      const last = splitted.pop() || ''

      // 숫자로 시작하면 `['숫자']`, 아니면 `dot notation`
      const formattedLast = /^\d/.test(last) ? `['${last}']` : `.${last}`

      return `{${splitted.join('.')}${formattedLast}}`
    })
    return `\`${transformed}\``
  })
}

const renameColorCategory = (formattedContent: string) => {
  return formattedContent.replace(/colors\.primitive/g, 'primitiveColor').replace(/colors\.semantic/g, 'semanticColor')
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
    borderWidth: getPixelValues(borderWidth),
    spacing: getRemValues(spacing),
    radii: getPixelValues(radii),
    fontSize: getRemValues(fontSize),
    letterSpacing: getPixelValues(letterSpacing),
    lineHeight: getRemValues(lineHeight),
    fontWeight: formatEmotionLeafValue(fontWeight),
    fontFamily: formatEmotionLeafValue(fontFamily),
    typography: flattenTypography(typography),
    textDecoration: formatEmotionLeafValue(textDecoration),
  }

  const contentStr = await getTokensFileString(tokens)
  const formattedContent = formatStringToTemplateLiteral(renameColorCategory(contentStr))

  const typesPath = join(__dirname, `../tokens/tokens-emotion-${theme}.ts`)
  await writeFile(typesPath, formattedContent, 'utf-8')
}

parseTokens('dark')
parseTokens('light')
