// https://leetcode.com/problems/leaf-similar-trees/

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

function leafSimilar(root1: TreeNode | null, root2: TreeNode | null): boolean {
  const getLeaves = (node: TreeNode | null): number[] => {
    if (node === null) {
      return [];
    }
    if (node.left === null && node.right === null) {
      return [node.val];
    }
    return [...getLeaves(node.left), ...getLeaves(node.right)];
  };

  const leaves1 = getLeaves(root1);
  const leaves2 = getLeaves(root2);

  return (
    leaves1.length === leaves2.length &&
    leaves1.every((leaf, i) => leaf === leaves2[i])
  );
}
