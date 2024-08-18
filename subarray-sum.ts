// https://leetcode.com/problems/subarray-sum-equals-k/

function subarraySum(nums: number[], k: number): number {
  const prefixSums: number[] = [];
  prefixSums.push(nums[0]);

  for (let i = 1; i < nums.length; i++) {
    prefixSums[i] = prefixSums[i - 1] + nums[i];
  }

  let count = 0;
  for (let start = 0; start < nums.length; start++) {
    if (prefixSums[start] === k) {
      count++;
    }

    for (let end = start + 1; end < nums.length; end++) {
      if (prefixSums[end] - prefixSums[start] === k) {
        count++;
      }
    }
  }
  return count;
}

function subarraySumNoMemory(nums: number[], k: number): number {
  let sum: number;
  let count = 0;
  for (let i = 0; i < nums.length; i++) {
    sum = 0;
    for (let j = i; j < nums.length; j++) {
      sum += nums[j];
      if (sum === k) {
        count++;
      }
    }
  }
  return count;
}

function subarraySumHashMap(nums: number[], k: number): number {
  let currentSumFrequency = new Map<number, number>();
  let sum = 0;
  let count = 0;

  for (let i = 0; i < nums.length; i++) {
    sum += nums[i];
    if (sum === k) {
      count++;
    }

    // looking to see if we had a sum of (currentSum - k), such that the sum after that would be k
    count += currentSumFrequency.get(sum - k) ?? 0;
    currentSumFrequency.set(sum, (currentSumFrequency.get(sum) ?? 0) + 1);
  }

  return count;
}

// Example:
// nums: 3 4 1 6 -3, k = 7
// currentSumFrequency: {3:1, 7:1, 8:1, 14:1, 11: 1}
// at index 3, we reach 14, and check that we've had a sum of 7 before.
// That means the array after that, until now sums to k
