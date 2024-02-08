// https://leetcode.com/problems/climbing-stairs/

// bottom-up
function climbStairsB(n: number): number {
  if (n <= 2) {
    return n;
  }

  const stepsNeeded = new Map<number, number>();

  stepsNeeded.set(1, 1);
  stepsNeeded.set(2, 2);

  for (let i = 3; i <= n; i++) {
    stepsNeeded.set(i, stepsNeeded.get(i - 1)! + stepsNeeded.get(i - 2)!);
  }

  return stepsNeeded.get(n)!;
}

// top-down
const memo = new Map<number, number>();

function climb(i: number): number {
  if (i <= 2) {
    return i;
  }

  if (!memo.has(i)) {
    memo.set(i, climb(i - 1) + climb(i - 2));
  }

  return memo.get(i)!;
}

function climbStairs(n: number): number {
  return climb(n);
}

console.log(climbStairs(5));
