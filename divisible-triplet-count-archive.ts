// draft, probably doesn't work
function divisibleTripletCountArchive(nums: number[], d: number): number {
  if (nums.length < 3) {
    return 0;
  }

  let count = 0;
  let map = new Map();

  for (let i = 0; i < nums.length; i++) {
    const remainder = nums[i] % d;
    map.set(remainder, map.has(remainder) ? map.get(remainder) + 1 : 1);
  }

  for (let l = 0; l < nums.length - 1; l++) {
    for (let i = l + 1; i < nums.length; i++) {
      const remainder = nums[i] % d;
      map.set(remainder, map.has(remainder) ? map.get(remainder) + 1 : 1);
    }

    for (let r = nums.length - 1; r > 1; r--) {
      map.set(nums[r] % d, map.get(nums[r] % d) - 1);

      let lookingFor = d - ((nums[r] + nums[l]) % d);

      if (map.has(lookingFor)) {
        count += map.get(lookingFor);
      }
    }
  }

  return count;
}

console.log(divisibleTripletCount([3, 3, 4, 7, 8], 5));

/**
 * Input: nums = [3,3,4,7,8], d = 5
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
