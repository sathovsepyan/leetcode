// https://leetcode.com/problems/house-robber/

function robBottomUp(nums: number[]): number {
  if (nums.length === 0) {
    return 0;
  }

  let maxRobbedAt = new Array(nums.length);
  maxRobbedAt[0] = nums[0];
  maxRobbedAt[1] = Math.max(nums[0], nums[1]);

  for (let i = 2; i < nums.length; i++) {
    maxRobbedAt[i] = Math.max(maxRobbedAt[i - 1], maxRobbedAt[i - 2] + nums[i]);
  }

  return maxRobbedAt[nums.length - 1];
}

function rob(nums: number[]): number {
  if (nums.length === 0) {
    return 0;
  }

  const memo = new Map<number, number>();

  const robMax = (i: number, nums: number[]): number => {
    if (!memo.has(i)) {
      memo.set(i, Math.max(robMax(i - 1, nums), robMax(i - 2, nums) + nums[i]));
    }

    return memo.get(i)!;
  };

  memo.set(0, nums[0]);
  memo.set(1, Math.max(nums[0], nums[1]));

  return robMax(nums.length - 1, nums);
}

console.log(rob([2, 7, 9, 3, 1]));
console.log(robBottomUp([2, 7, 9, 3, 1]));
