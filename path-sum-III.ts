// https://leetcode.com/problems/path-sum-iii

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

function dfs(
  node: TreeNode | null,
  targetSum: number,
  prefixSums: number[]
): number {
  if (node === null) {
    return 0;
  }

  let currentSum =
    prefixSums.length > 0
      ? prefixSums[prefixSums.length - 1] + node.val
      : node.val;
  let count = 0;
  if (currentSum === targetSum) {
    count++;
  }

  for (let i = 0; i < prefixSums.length; i++) {
    if (currentSum - prefixSums[i] === targetSum) {
      count++;
    }
  }

  return (
    count +
    dfs(node.left, targetSum, [...prefixSums, currentSum]) +
    dfs(node.right, targetSum, [...prefixSums, currentSum])
  );
}

function pathSum(root: TreeNode | null, targetSum: number): number {
  return dfs(root, targetSum, []);
}

// Path sum with O(n) complexity

function dfsMap(
  node: TreeNode | null,
  targetSum: number,
  currSum: number,
  prefixSumsFreq: Map<number, number>
): number {
  if (node === null) {
    return 0;
  }

  let count = 0;
  currSum += node.val;
  if (currSum === targetSum) {
    count++;
  }

  count += prefixSumsFreq.get(currSum - targetSum) ?? 0;

  prefixSumsFreq.set(currSum, (prefixSumsFreq.get(currSum) ?? 0) + 1);

  count +=
    dfsMap(node.left, targetSum, currSum, prefixSumsFreq) +
    dfsMap(node.right, targetSum, currSum, prefixSumsFreq);

  prefixSumsFreq.set(currSum, (prefixSumsFreq.get(currSum) ?? 0) - 1);

  return count;
}

function pathSumOn(root: TreeNode | null, targetSum: number): number {
  return dfsMap(root, targetSum, 0, new Map<number, number>());
}
