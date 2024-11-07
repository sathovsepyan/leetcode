// https://leetcode.com/problems/number-of-provinces

function findCircleNum(isConnected: number[][]): number {
    const uf = new UF(isConnected.length);

    for (let i = 0; i < isConnected.length; i++) {
        for (let j = i + 1; j < isConnected.length; j++) {
            if (isConnected[i][j]) {
                uf.union(i, j);
            }
        }
    }

    return uf.getCount();
};

class UF {
    private ids: number[];
    private count: number;

    constructor(n: number) {
        this.ids = []
        for (let i = 0; i < n; i++) {
            this.ids.push(i);
        }
        this.count = n;
    }

    public union(i: number, j: number) {
        if (!this.connected(i, j)) {
            let parenti = this.find(i);
            let parentj = this.find(j);

            this.ids[parenti] = this.ids[parentj];
            this.count--;
        }
    }

    public connected(i: number, j: number): boolean {
        let parenti = this.find(i);
        let parentj = this.find(j);

        return parenti === parentj;
    }

    public find(i: number): number {
        let parenti = i;
        while (this.ids[parenti] !== parenti) {
            parenti = this.ids[parenti];
        }

        return parenti;
    }

    public getCount() {
        return this.count;
    }
}