// https://leetcode.com/problems/maximum-depth-of-binary-tree

class TreeNode {
  val: number;
  left: TreeNode | null;
  right: TreeNode | null;
  constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
    this.val = val === undefined ? 0 : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
  }
}

function maxDepth(root: TreeNode | null): number {
  if (root === null) {
    return 0;
  }

  const iterate = (node: TreeNode, depth: number): number => {
    if (node.left === null && node.right === null) {
      return depth;
    }

    let leftDepth = -1;
    let rightDepth = -1;

    if (node.left !== null) {
      leftDepth = iterate(node.left, depth + 1);
    }
    if (node.right !== null) {
      rightDepth = iterate(node.right, depth + 1);
    }

    return Math.max(leftDepth, rightDepth);
  };

  return iterate(root, 1);
}

function maxDepthWithStack(root: TreeNode | null): number {
  if (root === null) {
    return 0;
  }

  const stack: [TreeNode, number][] = [];
  stack.push([root, 1]);
  let max = 1;
  while (stack.length > 0) {
    const current = stack.pop();
    if (!current) {
      continue;
    }

    max = Math.max(max, current[1]);

    if (current[0].left) {
      stack.push([current[0].left, current[1] + 1]);
    }
    if (current[0].right) {
      stack.push([current[0].right, current[1] + 1]);
    }
  }

  return max;
}
