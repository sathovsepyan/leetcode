// https://leetcode.com/problems/guess-number-higher-or-lower

/**
 * Forward declaration of guess API.
 * @param {number} num   your guess
 * @return 	     -1 if num is higher than the picked number
 *			      1 if num is lower than the picked number
 *               otherwise return 0
 * var guess = function(num) {}
 */

function guessNumber(n: number): number {
  if (n === 1) {
    return n;
  }
  let lo = 1;
  let hi = n;
  let pick, res;

  do {
    pick = lo + Math.floor((hi - lo) / 2);
    res = guess(pick);

    if (res === 1) {
      lo = pick + 1;
    } else if (res === -1) {
      hi = pick - 1;
    }
  } while (res !== 0);

  return pick;
}
