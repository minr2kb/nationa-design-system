import { join } from 'path'
import { readFile } from 'fs/promises'
import { Theme } from '../../types/theme'

export const getTokens = async (theme: Theme = 'dark'): Promise<RawTokens> => {
  const tokensPath = join(__dirname, '../../../../../tokens.json')
  const rawData = await readFile(tokensPath, 'utf-8')
  const tokens = JSON.parse(rawData) as Record<string, RawTokens>

  return theme === 'dark' ? tokens['NDS_darkMode'] : tokens['NDS_lightMode']
}
