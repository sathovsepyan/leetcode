// https://leetcode.com/problems/string-compression/

function compress(chars: string[]): number {
    let start = 0;
    let end = start + 1;

    while (end < chars.length) {
        if (chars[end] == chars[start]) {
            end++;
            continue;
        }

        let length = end - start;
        if (length > 1) {
            chars.splice(start, length, chars[start], ...length.toString().split(''));
            start = start + 1 + length.toString().length;
        } else {
            chars.splice(start, length, chars[start]);
            start = start + 1;
        }

        end = start + 1;
    }
    let length = end - start;
    if (length > 1) {
        chars.splice(start, length, chars[start], ...length.toString().split(''));
    }
    else {
        chars.splice(start, length, chars[start]);
    }
    return chars.length;
};