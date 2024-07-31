// https://leetcode.com/problems/max-number-of-k-sum-pairs

function maxOperations(nums: number[], k: number): number {
    let map = new Map<number, number>();

    let count = 0;
    for (let i = 0; i < nums.length; i++) {
        if (map.get(k - nums[i]) && map.get(k - nums[i]) > 0) {
            map.set(k - nums[i], map.get(k - nums[i]) - 1);
            count++;
        } else {
            map.set(nums[i], (map.get(nums[i]) ?? 0) + 1);
        }
    }
    return count;
};