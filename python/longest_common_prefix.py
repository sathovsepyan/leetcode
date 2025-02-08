class Solution:
    def longestCommonPrefix(self, strs: list[str]) -> str:
        min_str = min(strs)
        max_str = max(strs)

        i = 0
        while i < len(min_str) and i < len(max_str) and min_str[i] == max_str[i]:
            i = i + 1

        return min_str[:i]
