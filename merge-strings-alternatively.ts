function mergeAlternately(word1: string, word2: string): string {
    let res = "";
    for (let i = 0; i < Math.min(word1.length, word2.length); i++) {
        res += word1[i] + word2[i];
    }

    if (word1.length < word2.length) {
        res += word2.slice(word1.length);
    } else {
        res += word1.slice(word2.length);
    }

    return res;
};
