import prettier from 'prettier'

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
