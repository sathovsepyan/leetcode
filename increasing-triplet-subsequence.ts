// https://leetcode.com/problems/increasing-triplet-subsequence
function increasingTriplet(nums: number[]): boolean {
    if (nums.length < 3) return false;

    let min = Number.POSITIVE_INFINITY;
    let secondMin = Number.POSITIVE_INFINITY;

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] < min) {
            min = nums[i];
        } else if (nums[i] > min && nums[i] < secondMin) {
            secondMin = nums[i];
        } else if (nums[i] > secondMin) {
            return true;
        }
    }

    return false;
};