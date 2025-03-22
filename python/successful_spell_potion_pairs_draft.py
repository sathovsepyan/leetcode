class Solution:
    def lower_bound(self, arr: list[int], val: float) -> int:
        low = 0
        high = len(arr) - 1

        while low < high:
            mid = (high + low) // 2
            if arr[mid] < val:
                low = mid + 1
            else:
                high = mid

        return low

    def successfulPairs(
        self, spells: list[int], potions: list[int], success: int
    ) -> list[int]:
        potions.sort()
        res = []
        max_potion = potions[len(potions) - 1]

        for spell in spells:
            min_required_potion = success / spell
            if max_potion < min_required_potion:
                res.append(0)
            else:
                # index = bisect.bisect_left(potions, min_required_potion)
                index = self.lower_bound(potions, min_required_potion)
                res.append(len(potions) - index)
        return res


sol = Solution()
print(sol.successfulPairs([5, 1, 3], [1, 2, 3, 4, 5], 7))
print(sol.successfulPairs([3, 1, 2], [8, 5, 8], 16))


def binary_search_recursive(arr: list[int], start: int, end: int, val: int) -> int:
    mid = start + int((end - start) / 2)

    if start > end:
        return -1

    if val == arr[mid]:
        return mid
    elif val > arr[mid]:
        return binary_search_recursive(arr, mid + 1, end, val)
    elif val < arr[mid]:
        return binary_search_recursive(arr, start, mid, val)
