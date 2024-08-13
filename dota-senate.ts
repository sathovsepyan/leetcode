// https://leetcode.com/problems/dota2-senate/description/

function predictPartyVictory(senate: string): string {
    let rq: number[] = [];
    let dq: number[] = [];
    let n = senate.length;

    for (let i = 0; i < senate.length; i++) {
        if (senate[i] === 'R') {
            rq.push(i);
        } else {
            dq.push(i);
        }
    }

    while (rq.length !== 0 && dq.length !== 0) {
        if (rq[0] < dq[0]) {
            dq.shift();

            const temp = rq.shift();
            rq.push(temp + n);
        } else {
            rq.shift();

            const temp = dq.shift();
            dq.push(temp + n);
        }
    }

    return rq.length === 0 ? 'Dire' : 'Radiant';
};
