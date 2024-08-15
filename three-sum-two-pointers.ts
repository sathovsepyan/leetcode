// https://leetcode.com/problems/3sum

function threeSumTwoPointers(nums: number[]): number[][] {
    nums = nums.sort((a, b) => a - b);

    const res: number[][] = [];
    let low;
    let high;

    for (let i = 0; i < nums.length - 2; i++) {
        if (i > 0 && nums[i - 1] === nums[i]) continue;

        low = i + 1;
        high = nums.length - 1;

        while (low < high) {
            if (nums[low] + nums[high] === -nums[i]) {
                res.push([nums[i], nums[low], nums[high]]);
                high--;
                low++;
                while (low < nums.length && nums[low] === nums[low - 1])
                    low++;

                continue;
            }

            if (nums[low] + nums[high] < -nums[i]) {
                low++;
            } else {
                high--;
            }
        }
    }
    return res;
};

// console.log(threeSumTwoPointers([-1, 0, 1, 2, -1, -4]));
// console.log(threeSumTwoPointers([0, 0, 0, 0]));
console.log(threeSumTwoPointers([-2, 0, 0, 2, 2]));

// console.log(threeSumTwoPointers([-4, -1, -1, 0, 1, 2]));