// https://www.hackerrank.com/challenges/one-week-preparation-kit-new-year-chaos

function minimumBribes(q: number[]): void {
  let bribes = 0;
  for (let i = 0; i < q.length; i++) {
    if (q[i] > i + 3) {
      console.log("Too chaotic");
      return;
    }

    // if moved forward, add the number of moves
    if (q[i] > i + 1) {
      bribes += q[i] - i - 1;
    } else {
      // if stayed or moved back, check how many people it has overtaken
      for (let j = i + 1; j < q.length; j++) {
        if (q[j] < q[i]) {
          bribes++;
        }
      }
    }
  }

  console.log(bribes);
}
