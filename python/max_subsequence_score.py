# https://leetcode.com/problems/maximum-subsequence-score

import heapq


class Solution:
    def maxScore(self, nums1: list[int], nums2: list[int], k: int) -> int:
        pairs = list(zip(nums2, nums1))
        pairs.sort(reverse=True)

        heap = []
        heap_sum = 0
        max_score = 0
        for n2, n1 in pairs:
            if len(heap) < k:
                heapq.heappush(heap, n1)
                heap_sum += n1
            elif heap and n1 > heap[0]:
                old = heapq.heappop(heap)
                heapq.heappush(heap, n1)
                heap_sum = heap_sum - old + n1

            if len(heap) == k:
                max_score = max(max_score, heap_sum * n2)

        return max_score


sol = Solution()
print(sol.maxScore(nums1=[1, 3, 3, 2], nums2=[2, 1, 3, 4], k=3))
print(sol.maxScore(nums1=[1, 4], nums2=[3, 1], k=2))
