// https://leetcode.com/problems/reorder-routes-to-make-all-paths-lead-to-the-city-zero

type Road = {
  to: number;
  reversed: boolean;
};

function minReorder(n: number, connections: number[][]): number {
  const adj: Road[][] = new Array(n);
  for (let i = 0; i < n; i++) {
    adj[i] = [];
  }

  let from;
  let to;
  for (let i = 0; i < connections.length; i++) {
    from = connections[i][0];
    to = connections[i][1];

    adj[from].push({ to, reversed: false });
    adj[to].push({ to: from, reversed: true });
  }

  let reverses = 0;
  const queue: Road[] = [];
  const visited: boolean[] = Array(n).fill(false);

  visited[0] = true;
  queue.push(...adj[0]);

  while (queue.length > 0) {
    let road = queue.shift()!;

    visited[road.to] = true;
    // we start search _from_ 0 but need to count reversed road _to_ 0
    reverses += road.reversed ? 0 : 1;

    for (let nextRoad of adj[road.to]) {
      if (!visited[nextRoad.to]) {
        queue.push(nextRoad);
      }
    }
  }

  return reverses;
}
