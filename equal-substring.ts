// https://leetcode.com/problems/get-equal-substrings-within-budget/description/

function equalSubstring(s: string, t: string, maxCost: number): number {
  let diff = new Array(s.length).fill(0);

  for (let i = 0; i < s.length; i++) {
    diff[i] = Math.abs(t.charCodeAt(i) - s.charCodeAt(i));
  }

  let sum = 0;
  let maxLength = 0;
  let firstIndex = 0;
  let lastIndex = 0;

  while (firstIndex < diff.length && lastIndex < diff.length) {
    sum += diff[lastIndex];
    lastIndex++;

    if (sum <= maxCost && lastIndex - firstIndex > maxLength) {
      maxLength = lastIndex - firstIndex;
    }

    if (sum > maxCost) {
      sum -= diff[firstIndex];
      firstIndex++;
    }
  }

  // let maxLength = 0;
  // for (let i = 0; i < diff.length; i++) {
  //   let length = 0;
  //   let sum = 0;

  //   let j = i;

  //   while (j < diff.length && sum + diff[j] <= maxCost) {
  //     sum += diff[j];
  //     length++;
  //     j++;
  //   }

  //   if (length > maxLength) {
  //     maxLength = length;
  //   }
  // }

  return maxLength;
}

console.log(equalSubstring("abcd", "bcdf", 3));
console.log(equalSubstring("abcd", "cdef", 3));
console.log(equalSubstring("abcd", "acde", 0));
console.log(equalSubstring("abcde", "bddef", 3));
console.log(equalSubstring("abcdefg", "bddefii", 4));
//[ 1, 2, 1, 1, 1, 3, 2 ]
