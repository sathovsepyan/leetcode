// https://www.hackerrank.com/challenges/one-week-preparation-kit-grid-challenge

function gridChallenge(grid: string[]): string {
  grid[0] = grid[0].split("").sort().join("");

  for (let i = 0; i < grid.length - 1; i++) {
    grid[i + 1] = grid[i + 1].split("").sort().join("");
    for (let j = 0; j < grid[i].length; j++) {
      if (grid[i][j] > grid[i + 1][j]) {
        return "NO";
      }
    }
  }

  return "YES";
}
