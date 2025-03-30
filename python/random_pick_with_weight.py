# https://leetcode.com/problems/random-pick-with-weight/

import bisect
import random


class SolutionLinearPick:
    def __init__(self, w: list[int]):
        self.w = w
        self.sum = sum(w)

    def pickIndex(self) -> int:
        r = random.randint(1, self.sum)

        for i, weight in enumerate(self.w):
            r -= weight
            if r <= 0:
                return i

        return self.w[len(self.w) - 1]


class SolutionLogarithmicPick:
    def __init__(self, w: list[int]):
        self.prefix_sums = []
        prefix_sum = 0
        for item in w:
            prefix_sum += item
            self.prefix_sums.append(prefix_sum)
        self.sum = prefix_sum

    def pickIndex(self) -> int:
        r = random.randint(1, self.sum)
        i = bisect.bisect_left(self.prefix_sums, r)
        return i


class SolutionLogarithmicPickWithoutBisect:
    def __init__(self, w: list[int]):
        self.prefix_sums = []
        prefix_sum = 0
        for item in w:
            prefix_sum += item
            self.prefix_sums.append(prefix_sum)
        self.sum = prefix_sum

    def pickIndex(self) -> int:
        r = random.randint(1, self.sum)

        lo, hi = 0, len(self.prefix_sums)
        while lo < hi:
            mid = (lo + hi) // 2
            if self.prefix_sums[mid] < r:
                lo = mid + 1
            else:
                hi = mid

        return lo


# Your Solution object will be instantiated and called as such:
# obj = Solution(w)
# param_1 = obj.pickIndex()
