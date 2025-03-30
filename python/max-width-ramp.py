# https://leetcode.com/problems/maximum-width-ramp/


class Solution:
    def maxWidthRamp(self, nums: list[int]) -> int:
        if len(nums) == 0:
            return 0

        n = len(nums)

        # after the first element, we only need to consider elements with smaller value
        # because if the larger one was to form a pair with some element later, then the
        # smaller one with earlier index would work too (with a longer ramp)
        dec_stack = [0]
        for i in range(1, n):
            if nums[i] < nums[dec_stack[-1]]:
                dec_stack.append(i)
        # dec_stack is [0, 1]

        max_ramp = 0
        # start from the back
        for i in range(n - 1, -1, -1):
            # only move i to a lower index, once we have considered all the elements
            # that were smaller than this in the stack
            while dec_stack and nums[dec_stack[-1]] <= nums[i]:
                last = dec_stack.pop()
                # since we pop dec_stack at most n times, time complexity of the two loops is still O(n)
                max_ramp = max(max_ramp, i - last)

        return max_ramp

    def maxWidthRampBruteForce(self, nums: list[int]) -> int:
        n = len(nums)
        max_width = 0
        for i in range(n):
            for j in range(i + 1, n):
                if nums[i] <= nums[j]:
                    max_width = max(max_width, j - i)
        return max_width


nums = [6, 0, 8, 2, 1, 5]
