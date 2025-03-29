# https://leetcode.com/problems/trapping-rain-water/

"""
Motivation: Each element can trap water up to the height of the minimum of
the highest item to its left and the highst item to its right, minus its own height.

DP: Store the max_lefts and max_rights elements for each item in 2 arrays
"""


class Solution:
    def trap_brute_force(self, height: list[int]) -> int:
        ans = 0
        for i, item in enumerate(height):
            max_left, max_right = 0, 0
            for j in range(0, i):
                max_left = max(max_left, height[j])
            for j in range(i + 1, len(height)):
                max_right = max(max_right, height[j])

            if min(max_left, max_right) > item:
                ans += min(max_left, max_right) - item

        return ans

    def trap_dp(self, height: list[int]) -> int:
        if len(height) == 0:
            return 0

        max_left = [0]
        for i in range(0, len(height) - 1):
            # max_left[i + 1]
            max_left.append(max(max_left[i], height[i]))

        max_right = [0]
        for i in range(len(height) - 1, 0, -1):
            # max_right[i - 1]
            max_right.append(max(max_right[len(max_right) - 1], height[i]))
        max_right.reverse()

        ans = 0
        for i, item in enumerate(height):
            if min(max_left[i], max_right[i]) > item:
                ans += min(max_left[i], max_right[i]) - item

        return ans


height = [0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1]
