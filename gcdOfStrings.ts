// https://leetcode.com/problems/greatest-common-divisor-of-strings

function gcdOfStrings(str1: string, str2: string): string {
    let tLength = 0;

    if (str1 + str2 !== str2 + str1) {
        return "";
    }

    const gcd = (a: number, b: number) => b == 0 ? a : gcd(b, a % b);

    return str1.substring(0, gcd(Math.max(str1.length, str2.length), Math.min(str1.length, str2.length)))
};


// t divides s 
// s = t+t+ ... +t
// x divides str1 and str2 
