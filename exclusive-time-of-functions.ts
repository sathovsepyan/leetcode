function exclusiveTime(n: number, logs: string[]): number[] {
  let runtimes: number[] = Array<number>(n).fill(0);
  let ids: number[] = [];
  let previousTimestamp = 0;

  for (let i = 0; i < logs.length; i++) {
    const [idStr, action, timestampStr] = logs[i].split(":");
    const id = Number(idStr);
    const timestamp = Number(timestampStr);

    if (action === "start") {
      if (ids.length > 0) {
        runtimes[ids[ids.length - 1]] += timestamp - previousTimestamp;
      }
      ids.push(id);
    }

    if (action === "end") {
      runtimes[ids.pop()!] += timestamp - previousTimestamp + 1;
    }

    previousTimestamp = action === "start" ? timestamp : timestamp + 1;
  }

  return runtimes;
}

console.log(
  exclusiveTime(8, [
    "0:start:0",
    "1:start:5",
    "2:start:6",
    "3:start:9",
    "4:start:11",
    "5:start:12",
    "6:start:14",
    "7:start:15",
    "1:start:24",
    "1:end:29",
    "7:end:34",
    "6:end:37",
    "5:end:39",
    "4:end:40",
    "3:end:45",
    "0:start:49",
    "0:end:54",
    "5:start:55",
    "5:end:59",
    "4:start:63",
    "4:end:66",
    "2:start:69",
    "2:end:70",
    "2:start:74",
    "6:start:78",
    "0:start:79",
    "0:end:80",
    "6:end:85",
    "1:start:89",
    "1:end:93",
    "2:end:96",
    "2:end:100",
    "1:end:102",
    "2:start:105",
    "2:end:109",
    "0:end:114",
  ])
);

//  "0:start:0",
// "1:start:5",
// "2:start:6",
// "3:start:9",
// "3:end:45",
// "0:start:49",
// "0:end:54",
// "2:start:74",
// "2:end:96",
// "2:end:100",
// "1:end:102",
// "0:end:114",

// output   [21,19,24,7,8,12,10,14] 1 5 -9 2 3
// expected [20,14,35,7,6,9,10,14]

// "0:start:0",
// "1:start:5",
// "2:start:6",
// "3:start:9",
// "4:start:11",
// "5:start:12",
// "6:start:14",
// "7:start:15",
// "1:start:24",
// "1:end:29",
// "7:end:34",
// "6:end:37",
// "5:end:39",
// "4:end:40",
// "3:end:45",
// "0:start:49",
// "0:end:54",
// "5:start:55",
// "5:end:59",
// "4:start:63",
// "4:end:66",
// "2:start:69",
// "2:end:70",
// "2:start:74",
// "6:start:78",
// "0:start:79",
// "0:end:80",
// "6:end:85",
// "1:start:89",
// "1:end:93",
// "2:end:96",
// "2:end:100",
// "1:end:102",
// "2:start:105",
// "2:end:109",
// "0:end:114",
