// https://leetcode.com/problems/two-sum-ii-input-array-is-sorted/

function twoSum(numbers: number[], target: number): number[] {

    function binarySearch(low: number, high: number, goal: number) {
        if (high < low) {
            return -1;
        }
        const mid = low + Math.floor((high - low) / 2);

        if (numbers[mid] === goal) {
            return mid;
        }
        if (numbers[mid] < goal) {
            return binarySearch(mid + 1, high, goal);
        }
        else {
            return binarySearch(low, mid - 1, goal);
        }
    }

    for (let l = 0; l < numbers.length - 1; l++) {
        const r = binarySearch(l + 1, numbers.length - 1, target - numbers[l]);
        if (r !== -1) {
            return [l + 1, r + 1];
        }
    }
};

