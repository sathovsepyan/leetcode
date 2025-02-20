# https://leetcode.com/problems/valid-palindrome/description/


class Solution:
    def isPalindrome(self, s: str) -> bool:
        filtered = [c if c.isalpha() or c.isdigit() else "" for c in s.lower()]

        word = "".join(filtered)
        reversed_word = word[::-1]

        return word == reversed_word
