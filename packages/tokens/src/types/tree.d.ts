type Tree<L = string> = {
  [key: string]: Node<L>
}
type Node<L = string> = L | Tree<L> | Array<Node<L>>

type LeafValueOf<T> = T extends { $value: infer V } ? V : T extends Record<string, infer U> ? LeafValueOf<U> : never

type DTCGLeaf<V = string | Record<string, string>> = {
  $type: string
  $value: V
  $description?: string
}
