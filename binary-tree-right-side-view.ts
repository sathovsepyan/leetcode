// https://leetcode.com/problems/binary-tree-right-side-view/

/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */

function rightSideView(root: TreeNode | null): number[] {
  if (root === null) {
    return [];
  }

  const queue: { node: TreeNode; depth: number }[] = [];

  const res: number[] = [];
  queue.push({ node: root, depth: 0 });

  while (queue.length > 0) {
    let { node, depth } = queue.shift();
    if (node === null) {
      continue;
    }

    if (res.length === depth) {
      res.push(node.val);
    }

    queue.push({ node: node.right, depth: depth + 1 });
    queue.push({ node: node.left, depth: depth + 1 });
  }

  return res;
}
