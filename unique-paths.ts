// https://leetcode.com/problems/unique-paths

function uniquePaths(m: number, n: number): number {
  const steps: number[][] = Array(m);

  for (let i = 0; i < m; i++) {
    steps[i] = Array(n);
    for (let j = 0; j < n; j++) {
      if (i === 0 && j === 0) {
        steps[i][j] = 1;
        continue;
      }

      const top = i === 0 ? 0 : steps[i - 1][j];
      const left = j === 0 ? 0 : steps[i][j - 1];

      steps[i][j] = top + left;
    }
  }

  return steps[m - 1][n - 1];
}
