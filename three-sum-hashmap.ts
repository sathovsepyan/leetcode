// https://leetcode.com/problems/3sum

function threeSum(nums: number[]): number[][] {
    nums = nums.sort((a, b) => a - b);

    const res: number[][] = [];
    let lookingFor: Map<number, number>;

    for (let i = 0; i < nums.length - 2; i++) {
        if (i > 0 && nums[i - 1] === nums[i]) continue;

        lookingFor = new Map();
        for (let j = i + 1; j < nums.length; j++) {
            if (lookingFor.has(nums[j])) {
                res.push([nums[i], nums[lookingFor.get(nums[j])!], nums[j]]);
                while (j < nums.length -1 && nums[j] === nums[j+1]) j++;
            }
            else {
                lookingFor.set(-nums[i] - nums[j], j);
            }
        }
    }
    return res;
};

// console.log(threeSum([-1, 0, 1, 2, -1, -4]));
console.log(threeSum([0, 0, 0, 0]));
// console.log(threeSum([-4, -1, -1, 0, 1, 2]));