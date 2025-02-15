# https://leetcode.com/problems/valid-parentheses/


class Solution:
    def isValid(self, s: str) -> bool:
        stack = []

        pair = {"(": ")", "[": "]", "{": "}"}

        for i in range(0, len(s)):
            if s[i] in pair:
                stack.append(s[i])
                continue

            if len(stack) == 0 or pair[stack.pop()] != s[i]:
                return False

        return len(stack) == 0
