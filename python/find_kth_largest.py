# https://leetcode.com/problems/kth-largest-element-in-an-array

import heapq


class Solution:
    def findKthLargest(self, nums: list[int], k: int) -> int:
        heap = []

        for num in nums:
            heapq.heappush(heap, num)
            if len(heap) > k:
                heapq.heappop(heap)

        return heapq.heappop(heap)

    def findKthLargest_old(self, nums: list[int], k: int) -> int:
        nums_negative = [-1 * num for num in nums]
        heapq.heapify(nums_negative)

        for _ in range(0, k - 1):
            heapq.heappop(nums_negative)

        return -1 * heapq.heappop(nums_negative)


sol = Solution()
print(sol.findKthLargest([3, 2, 1, 5, 6, 4], 2))
