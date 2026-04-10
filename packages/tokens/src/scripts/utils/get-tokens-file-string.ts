import prettier from 'prettier'

/**
 * 토큰 객체를 `const` 선언 + `export const tokens` 형태의 TypeScript 소스 문자열로 변환
 */
const getTokensFileString = async (tokens: Record<string, any>): Promise<string> => {
  const tokensString = Object.entries(tokens)
    .map(([key, value]) => `const ${key} = ${JSON.stringify(value, null, 2)}`)
    .join('\n')

  const tokensObject = `export const tokens = {${Object.keys(tokens).join(',\n')}} as const;`
  const prettierConfig = await prettier.resolveConfig(process.cwd())
  const formattedContent = await prettier.format(tokensString + '\n' + tokensObject, {
    ...prettierConfig,
    parser: 'typescript',
  })

  return formattedContent
}

export default getTokensFileString
