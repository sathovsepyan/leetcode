import math


class Solution:
    def isPalindrome(self, x: int) -> bool:
        if x < 0:
            return False
        if x == 0:
            return True

        length = int(math.log(x, 10))
        i = length
        while i > 0:
            first = int(x / math.pow(10, i))
            last = int(x % 10)

            if first != last:
                return False

            x = x - first * math.pow(10, i)
            x = int(x / 10)
            i = i - 2

        return True
