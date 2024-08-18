// https://leetcode.com/problems/count-good-nodes-in-binary-tree

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

function goodNodes(root: TreeNode | null): number {
  const dfs = (node: TreeNode | null, max: number): number => {
    if (node === null) {
      return 0;
    }

    const goodNode = node.val >= max ? 1 : 0;

    max = Math.max(max, node.val);
    return goodNode + dfs(node.left, max) + dfs(node.right, max);
  };

  if (root === null) {
    return 0;
  }

  return dfs(root, root.val);
}
