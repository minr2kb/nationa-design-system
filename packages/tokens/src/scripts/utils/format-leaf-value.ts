const isLeaf = (tokens: any): tokens is DTCGLeaf => {
  return typeof tokens === 'object' && tokens !== null && '$value' in tokens && '$type' in tokens
}

export const mapValues = <T, R>(obj: Record<string, T>, callback: (value: T, key: string) => R): Record<string, R> => {
  return Object.fromEntries(Object.entries(obj).map(([key, value]) => [key, callback(value, key)])) as Record<string, R>
}

export const formatLeafValue = <T, R>(tokens: T, callback: (value: LeafValueOf<T>) => R): Node<R> => {
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
