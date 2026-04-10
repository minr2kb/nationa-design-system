const isLeaf = (tokens: unknown): tokens is DTCGLeaf =>
  typeof tokens === 'object' && tokens !== null && '$value' in tokens && '$type' in tokens

/**
 * 객체의 모든 값을 callback으로 변환한 새 객체를 반환
 */
export const mapValues = <T, R>(
  obj: Record<string, T>,
  callback: (value: T, key: string) => R,
): Record<string, R> =>
  Object.fromEntries(Object.entries(obj).map(([key, value]) => [key, callback(value, key)])) as Record<string, R>

/**
 * DTCG 토큰 트리를 순회하며 leaf의 `$value`를 callback으로 변환
 */
const formatLeafValue = <T, R>(tokens: T, callback: (value: LeafValueOf<T>) => R): Node<R> => {
  if (Array.isArray(tokens)) {
    return tokens.map((token) => formatLeafValue(token, callback)) as Node<R>
  }

  if (tokens !== null && typeof tokens === 'object') {
    if (isLeaf(tokens)) {
      return callback(tokens.$value as LeafValueOf<T>)
    }
    return mapValues(tokens as Record<string, any>, (value) => formatLeafValue(value, callback)) as Node<R>
  }

  return tokens as Node<R>
}

export default formatLeafValue
