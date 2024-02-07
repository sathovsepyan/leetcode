// https://leetcode.com/problems/daily-temperatures/description/

function dailyTemperatures(temperatures: number[]): number[] {
  let daysToWait = new Array(temperatures.length).fill(0);

  let stack: number[] = [];

  for (let i = 0; i < temperatures.length; i++) {
    while (
      stack.length > 0 &&
      temperatures[i] > temperatures[stack[stack.length - 1]]
    ) {
      let id = stack.pop()!;

      daysToWait[id] = i - id;
    }

    stack.push(i);
  }

  return daysToWait;
}

console.log(dailyTemperatures([30, 40, 50, 60]));
