import { join } from 'path'
import { readFile } from 'fs/promises'
import { Theme } from '../../types/theme'

const THEME_KEYS: Record<Theme, string> = {
  dark: 'NDS_darkMode',
  light: 'NDS_lightMode',
}

/** `tokens.json`에서 지정된 테마의 토큰을 읽어 반환 */
export const getTokens = async (theme: Theme = 'dark'): Promise<RawTokens> => {
  const tokensPath = join(__dirname, '../../../../../tokens.json')
  const rawData = await readFile(tokensPath, 'utf-8')
  const tokens = JSON.parse(rawData) as Record<string, RawTokens>

  return tokens[THEME_KEYS[theme]]
}
