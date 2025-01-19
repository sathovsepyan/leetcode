// https://leetcode.com/problems/maximum-profit-from-trading-stocks/
let memo: number[][];

function step(
  price: number[],
  future: number[],
  budget: number,
  i: number
): number {
  if (i === price.length) {
    return 0;
  }

  if (memo[i][budget]) {
    return memo[i][budget];
  }

  const possibleProfit = future[i] - price[i];

  if (possibleProfit > 0 && budget - price[i] >= 0) {
    memo[i][budget] = Math.max(
      possibleProfit + step(price, future, budget - price[i], i + 1),
      step(price, future, budget, i + 1)
    );
  } else {
    memo[i][budget] = step(price, future, budget, i + 1);
  }

  return memo[i][budget];
}

function maximumProfit(
  price: number[],
  future: number[],
  budget: number
): number {
  memo = Array(price.length).fill(null);
  for (let i = 0; i < price.length; i++) {
    memo[i] = Array(price.length).fill(null);
  }

  return step(price, future, budget, 0);
}
