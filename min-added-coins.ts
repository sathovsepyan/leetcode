// https://leetcode.com/problems/minimum-number-of-coins-to-be-added/

function minimumAddedCoins(coins: number[], target: number): number {
  coins = coins.sort((a, b) => a - b);

  let added = 0;
  let currentlyObtained = 0;
  let i = 0;

  while (currentlyObtained < target) {
    if (i < coins.length && coins[i] <= currentlyObtained + 1) {
      currentlyObtained += coins[i];
      i++;
    } else {
      added++;
      currentlyObtained += currentlyObtained + 1;
    }
  }

  return added;
}
