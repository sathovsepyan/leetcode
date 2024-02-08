// https://leetcode.com/problems/number-of-divisible-triplet-sums/description/

function divisibleTripletCount(nums: number[], d: number): number {
  let count = 0;
  let seenPair: number[] = new Array(d).fill(0);

  for (let r = 0; r < nums.length; r++) {
    let target = (d - (nums[r] % d)) % d;
    count += seenPair[target] ?? 0;

    for (let l = 0; l < r; l++) {
      seenPair[(nums[r] + nums[l]) % d] += 1;
    }
  }
  return count;
}

console.log(divisibleTripletCount([78, 71, 20], 13));

/**
 * Input: nums = [3,3,4,7,8], d = 5
 *               [3,3,4,2,3]
 * Output: 3
 * Explanation: The triplets which are divisible by 5 are: (0, 1, 2), (0, 2, 4), (1, 2, 4).
 * It can be shown that no other triplet is divisible by 5. Hence, the answer is 3.
 */

// for (let i = 0; i < nums.length; i++) {
//   for (let j = i + 1; j < nums.length; j++) {
//     for (let k = j + 1; k < nums.length; k++) {
//       if ((nums[i] + nums[j] + nums[k]) % d === 0) {
//         count++;
//       }
//     }
//   }
// }
