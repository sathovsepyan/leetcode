function numberToWords(num: number): string {
  const d: Record<number, string> = {
    0: "Zero",
    1: "One",
    2: "Two",
    3: "Three",
    4: "Four",
    5: "Five",
    6: "Six",
    7: "Seven",
    8: "Eight",
    9: "Nine",
    10: "Ten",
    11: "Eleven",
    12: "Twelve",
    13: "Thirteen",
    14: "Fourteen",
    15: "Fifteen",
    16: "Sixteen",
    17: "Seventeen",
    18: "Eighteen",
    19: "Nineteen",
    20: "Twenty",
    30: "Thirty",
    40: "Forty",
    50: "Fifty",
    60: "Sixty",
    70: "Seventy",
    80: "Eighty",
    90: "Ninety",
    100: "Hundred",
    1000: "Thousand",
    1000000: "Million",
    1000000000: "Billion",
  };

  const under100 = (n: number): string[] => {
    let hundredsDigit = Math.floor(n / 100);
    let tensDigit = Math.floor((n - hundredsDigit * 100) / 10);
    let onesDigit = n % 10;

    let res: string[] = [];
    if (hundredsDigit != 0) {
      res.push(d[hundredsDigit]);
      res.push(d[100]);
    }
    if (tensDigit === 1) {
      res.push(d[tensDigit * 10 + onesDigit]);
    } else {
      if (tensDigit != 0) {
        res.push(d[tensDigit * 10]);
      }
      if (onesDigit != 0) {
        res.push(d[onesDigit]);
      }
    }

    return res;
  };

  let length = num.toString().length;
  let final: string[] = [];

  if (num === 0) {
    return d[0];
  }

  if (length <= 3) {
    final = under100(num);
  } else if (length <= 6) {
    final.push(
      ...under100(Number.parseInt(num.toString().substring(0, length - 3)))
    );
    final.push(d[1000]);
    final.push(
      ...under100(Number.parseInt(num.toString().substring(length - 3)))
    );
  } else if (length <= 9) {
    final.push(
      ...under100(Number.parseInt(num.toString().substring(0, length - 6)))
    );
    final.push(d[1000000]);

    let temp = under100(
      Number.parseInt(num.toString().substring(length - 6, length - 3))
    );
    final.push(...temp);
    if (temp.length != 0) final.push(d[1000]);

    final.push(
      ...under100(Number.parseInt(num.toString().substring(length - 3)))
    );
  } else if (length <= 12) {
    final.push(
      ...under100(Number.parseInt(num.toString().substring(0, length - 9)))
    );
    final.push(d[1000000000]);

    let temp = under100(
      Number.parseInt(num.toString().substring(length - 9, length - 6))
    );
    final.push(...temp);
    if (temp.length != 0) final.push(d[1000000]);

    temp = under100(
      Number.parseInt(num.toString().substring(length - 6, length - 3))
    );
    final.push(...temp);
    if (temp.length != 0) final.push(d[1000]);

    final.push(
      ...under100(Number.parseInt(num.toString().substring(length - 3)))
    );
  }

  return final.join(" ");
}
