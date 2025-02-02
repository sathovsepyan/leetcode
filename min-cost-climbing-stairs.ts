// https://leetcode.com/problems/min-cost-climbing-stairs

function minCostClimbingStairs(cost: number[]): number {
  if (cost.length === 0) return 0;
  if (cost.length === 1) return cost[0];

  const dp: number[] = [];
  dp.push(cost[0]);
  dp.push(cost[1]);

  for (let i = 2; i < cost.length; i++) {
    dp.push(cost[i] + Math.min(dp[i - 1], dp[i - 2]));
  }

  return Math.min(dp[dp.length - 1], dp[dp.length - 2]);
}

function minCostClimbingStairsConstMemory(cost: number[]): number {
  if (cost.length === 0) return 0;
  if (cost.length === 1) return cost[0];

  let step1 = cost[0];
  let step2 = cost[1];

  for (let i = 2; i < cost.length; i++) {
    let temp = cost[i] + Math.min(step1, step2);

    step1 = step2;
    step2 = temp;
  }

  return Math.min(step1, step2);
}
