// https://leetcode.com/problems/integer-to-roman/description/

function intToRoman(num: number): string {
  let numStr = num.toString();
  let map: Record<number, string> = {
    1: "I",
    4: "IV",
    5: "V",
    9: "IX",
    10: "X",
    40: "XL",
    50: "L",
    90: "XC",
    100: "C",
    400: "CD",
    500: "D",
    900: "CM",
    1000: "M",
  };

  let res = "";
  for (let i = 0; i < numStr.length; i++) {
    let digit = Number(numStr[i]);
    let zeros = Math.pow(10, numStr.length - i - 1);

    if (digit === 0) {
      continue;
    }

    if (digit === 4 || digit === 9) {
      res += map[digit * zeros];
      continue;
    }

    if (digit >= 5) {
      res += map[5 * zeros];
      digit -= 5;
    }

    for (let j = 0; j < digit; j++) {
      res += map[zeros];
    }
  }

  return res;
}

function intToRoman2(num: number): string {
  let map: [number, string][] = [
    [1000, "M"],
    [900, "CM"],
    [500, "D"],
    [400, "CD"],
    [100, "C"],
    [90, "XC"],
    [50, "L"],
    [40, "XL"],
    [10, "X"],
    [9, "IX"],
    [5, "V"],
    [4, "IV"],
    [1, "I"],
  ];

  let res = "";

  for (let i = 0; i < Object.entries(map).length; i++) {
    while (num >= map[i][0]) {
      res += map[i][1];
      num -= map[i][0];
    }
  }

  return res;
}

console.log(intToRoman2(1));
