# https://leetcode.com/problems/valid-word-abbreviation/


class Solution:
    def validWordAbbreviation(self, word: str, abbr: str) -> bool:
        i, j = 0, 0  # i in word, j in abbr

        skip_len_str = ""
        while j < len(abbr):
            if (abbr[j] >= "1" or (abbr[j] == "0" and skip_len_str)) and abbr[j] <= "9":
                skip_len_str = skip_len_str + abbr[j]
                j += 1
                continue

            if skip_len_str:
                skip_len = int(skip_len_str)
                skip_len_str = ""
                i += skip_len

            if i >= len(word) or word[i] != abbr[j]:
                return False

            i += 1
            j += 1

        # i should reach the end of the word if not skipping at the end
        if not skip_len_str and i != len(word):
            return False

        # i + skip_len should reach the end of the work if the word ends with a skip number
        if skip_len_str and i + int(skip_len_str) != len(word):
            return False

        return True
