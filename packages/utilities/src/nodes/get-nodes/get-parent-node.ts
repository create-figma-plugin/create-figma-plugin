export function getParentNode(node: BaseNode): BaseNode & ChildrenMixin {
  const parentNode = node.parent
  if (parentNode === null) {
    throw new Error(`\`node.parent\` is \`null\``)
  }
  return parentNode
}