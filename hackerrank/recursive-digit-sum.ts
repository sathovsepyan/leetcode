// https://www.hackerrank.com/challenges/one-week-preparation-kit-recursive-digit-sum

function superDigit(n: string, k: number): number {
  return getSuperDigit((sumDigits(n) * k).toString());
}

function getSuperDigit(n: string): number {
  if (n.length === 1) {
    return Number(n);
  }

  return getSuperDigit(sumDigits(n).toString());
}

function sumDigits(n: string): number {
  let s = 0;
  for (let digit of n.split("")) {
    s += Number(digit);
  }
  return s;
}
