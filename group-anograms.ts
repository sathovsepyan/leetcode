function groupAnagrams(strs: string[]): string[][] {
  const sortLetters = (s: string): string => {
    return s
      .split("")
      .sort((a, b) => (a < b ? -1 : 1))
      .join();
  };

  const map: Map<string, string[]> = new Map();
  let sorted;
  for (let str of strs) {
    sorted = sortLetters(str);
    map.set(sorted, [...(map.get(sorted) ?? []), str]);
  }

  return [...map.values()];
}
