// https://leetcode.com/problems/longest-zigzag-path-in-a-binary-tree

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

function traverse(
  node: TreeNode | null,
  goRight: boolean,
  max: number
): number {
  if (node === null) {
    return max;
  }

  if (goRight) {
    max = Math.max(
      traverse(node.right, false, max + 1),
      traverse(node.left, true, 1)
    );
  } else {
    max = Math.max(
      traverse(node.left, true, max + 1),
      traverse(node.right, false, 1)
    );
  }
  return max;
}

function longestZigZag(root: TreeNode | null): number {
  return (
    Math.max(traverse(root.left, true, 1), traverse(root.right, false, 1)) - 1
  );
}
