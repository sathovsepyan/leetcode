// from the picture max-total-profit.png

function maxTotalProfit(price: number[], profit: number[]): number {
  let maxProfit = -1;

  for (let j = 1; j < price.length; j++) {
    // find max profit on the left that satisfies the price constraint
    let bestLeftProfit = -1;
    for (let i = j - 1; i >= 0; i--) {
      if (price[i] < price[j] && profit[i] > bestLeftProfit) {
        bestLeftProfit = profit[i];
      }
    }

    if (bestLeftProfit === -1) {
      continue;
    }

    // find max profit on the right that satisfies the price constraint
    let bestRightProfit = -1;
    for (let k = j + 1; k < price.length; k++) {
      if (price[k] > price[j] && profit[k] > bestRightProfit) {
        bestRightProfit = profit[k];
      }
    }

    if (bestRightProfit === -1) {
      continue;
    }

    maxProfit = Math.max(
      maxProfit,
      bestLeftProfit + profit[j] + bestRightProfit
    );
  }

  return maxProfit;
}

console.log(maxTotalProfit([1, 5, 3, 4, 6], [2, 3, 4, 5, 6]));
