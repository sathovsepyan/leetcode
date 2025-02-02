// https://leetcode.com/problems/n-th-tribonacci-number

function tribonacci(n: number): number {
  const memo: number[] = [];
  memo.push(0);
  memo.push(1);
  memo.push(1);

  for (let i = 3; i <= n; i++) {
    memo.push(memo[i - 1] + memo[i - 2] + memo[i - 3]);
  }

  return memo[n];
}

function tribonacciConstMemory(n: number): number {
  if (n === 0) return 0;
  if (n < 3) return 1;

  let tMinus3 = 0;
  let tMinus2 = 1;
  let tMinus1 = 1;
  let t;

  for (let i = 3; i <= n; i++) {
    t = tMinus1 + tMinus2 + tMinus3;

    tMinus3 = tMinus2;
    tMinus2 = tMinus1;
    tMinus1 = t;
  }

  return t;
}
