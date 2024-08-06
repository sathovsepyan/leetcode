// https://leetcode.com/problems/equal-row-and-column-pairs

function equalPairs(grid: number[][]): number {
    const map = new Map<string, number>();
    for (let i = 0; i < grid.length; i++) {
        let key = grid[i].join(',');
        map.set(key, (map.get(key) ?? 0) + 1)
    }

    let count = 0;
    for (let j = 0; j < grid.length; j++) {
        let col: number[] = [];
        for (let i = 0; i < grid.length; i++) {
            col.push(grid[i][j]);
        }
        let key = col.join(',');
        count += (map.get(key) ?? 0)
    }

    return count;
};
