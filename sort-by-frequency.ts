// https://leetcode.com/problems/sort-characters-by-frequency/description/

function frequencySort(s: string): string {
  let frequencies = new Map<string, number>();

  for (let i = 0; i < s.length; i++) {
    frequencies.set(s[i], (frequencies.get(s[i]) ?? 0) + 1);
  }

  let sortedFrequencies = new Map(
    [...frequencies.entries()].sort((a, b) => b[1] - a[1])
  );

  let res = "";
  for (let [key, value] of sortedFrequencies) {
    res += key.repeat(value);
  }

  return res;
}

console.log(frequencySort("ttereee"));

// t -> 2
// r -> 1
// e -> 4
