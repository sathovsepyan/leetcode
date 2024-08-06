// https://leetcode.com/problems/determine-if-two-strings-are-close

function closeStrings(word1: string, word2: string): boolean {
    if (word1.length != word2.length) {
        return false;
    }

    const counts1 = new Map<string, number>();
    for (let i = 0; i < word1.length; i++) {
        counts1.set(word1[i], (counts1.get(word1[i]) ?? 0) + 1);
    }

    const counts2 = new Map<string, number>();
    for (let i = 0; i < word2.length; i++) {
        counts2.set(word2[i], (counts2.get(word2[i]) ?? 0) + 1);
    }

    console.log('counts1', counts1)
    console.log('counts2', counts2)


    let keys1 = [...counts1.keys()];
    let keys2 = [...counts2.keys()];
    if (keys1.length !== keys2.length || !keys1.every(key => keys2.includes(key))) {
        return false;
    }

    let values1 = [...counts1.values()].sort((a, b) => a - b);
    let values2 = [...counts2.values()].sort((a, b) => a - b);

    for (let i = 0; i < values1.length; i++ ) {
        if (values1[i] !== values2[i])
            return false;
    }

    return true;
};

// console.log(closeStrings("abbzzca", "babzzcz"));
console.log(closeStrings("aaabbbbccddeeeeefffff", "aaaaabbcccdddeeeeffff"));
