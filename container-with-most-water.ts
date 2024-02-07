// https://leetcode.com/problems/container-with-most-water/description/

function maxArea(height: number[]): number {
  let l = 0;
  let r = height.length - 1;

  let bestArea = 0;

  while (l < r) {
    const area = Math.min(height[l], height[r]) * (r - l);
    if (area > bestArea) {
      bestArea = area;
    }

    if (height[l] < height[r]) {
      l++;
    } else {
      r--;
    }
  }

  return bestArea;
}

console.log(maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7]));

function maxAreaBruteForce(height: number[]): number {
  let bestI = 0;
  let bestJ = 1;

  for (let i = 0; i < height.length; i++) {
    for (let j = i + 1; j < height.length; j++) {
      if (
        Math.min(height[i], height[j]) * (j - i) >
        Math.min(height[bestJ], height[bestI]) * (bestJ - bestI)
      ) {
        bestJ = j;
        bestI = i;
      }
    }
  }

  return Math.min(height[bestJ], height[bestI]) * (bestJ - bestI);
}
