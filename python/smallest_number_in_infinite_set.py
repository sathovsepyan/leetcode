# https://leetcode.com/problems/smallest-number-in-infinite-set/
import heapq


class SmallestInfiniteSet:
    def __init__(self):
        self.current_int = 1
        self.added_back_heap = []
        self.is_present = set()

    def popSmallest(self) -> int:
        if self.added_back_heap:
            val = heapq.heappop(self.added_back_heap)
            self.is_present.remove(val)
        else:
            val = self.current_int
            self.current_int += 1
        return val

    def addBack(self, num: int) -> None:
        if num >= self.current_int or num in self.is_present:
            return

        self.is_present.add(num)
        heapq.heappush(self.added_back_heap, num)


# Your SmallestInfiniteSet object will be instantiated and called as such:
obj = SmallestInfiniteSet()
param_1 = obj.popSmallest()
print(param_1)
param_1 = obj.popSmallest()
print(param_1)
obj.addBack(3)
param_1 = obj.popSmallest()
print(param_1)
obj.addBack(2)
param_1 = obj.popSmallest()
print(param_1)
param_1 = obj.popSmallest()
print(param_1)
