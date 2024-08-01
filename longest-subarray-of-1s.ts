// https://leetcode.com/problems/longest-subarray-of-1s-after-deleting-one-element/
function longestSubarray(nums: number[]): number {
    if (nums.length == 1) {
        return 0;
    }

    let start = 0;
    let lastZero = -1;
    let max = 0;

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === 0) {
            start = lastZero + 1;
            lastZero = i;
        }
        max = Math.max(max, i - start);
    }

    return max;
};