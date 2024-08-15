function twoSum(numbers: number[], target: number): number[] {
    let low = 0;
    let high = numbers.length - 1;

    while (low < high) {
        if (numbers[low] + numbers[high] === target) {
            return [low + 1, high + 1];
        }

        if (numbers[low] + numbers[high] < target) {
            low++;
        } else {
            high--;
        }
    }

    return [-1, -1];
}

console.log(twoSum([2, 7, 11, 15], 18))
