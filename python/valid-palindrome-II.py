# https://leetcode.com/problems/valid-palindrome-ii/


class Solution:
    def checkPalindrome(self, s: str, start: int, end: int):
        while start < end:
            if s[start] != s[end]:
                return False

            start += 1
            end -= 1

        return True

    def validPalindrome(self, s: str) -> bool:
        start = 0
        end = len(s) - 1

        while start < end:
            if s[start] != s[end]:
                # check moving both indices
                return self.checkPalindrome(s, start, end - 1) or self.checkPalindrome(
                    s, start + 1, end
                )
            start += 1
            end -= 1

        return True


sol = Solution()
print(
    sol.validPalindrome(
        "aguokepatgbnvfqmgmlcupuufxoohdfpgjdmysgvhmvffcnqxjjxqncffvmhvgsymdjgpfdhooxfuupuculmgmqfvnbgtapekouga"
    )
)
