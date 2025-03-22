# https://leetcode.com/problems/koko-eating-bananas/
import math


class Solution:
    def tryAtSpeed(self, piles: list[int], speed: int, max_time: int) -> int:
        total_time = 0

        for pile in piles:
            total_time += math.ceil(pile / speed)
            if total_time > max_time:
                break

        return total_time

    def minEatingSpeed(self, piles: list[int], h: int) -> int:
        min_speed = math.ceil(sum(piles) / h)
        max_speed = max(piles)

        current_speed = math.floor((min_speed + max_speed) / 2)
        while min_speed < max_speed:
            current_speed = math.floor((min_speed + max_speed) / 2)
            current_time = self.tryAtSpeed(piles, current_speed, h)

            if current_time > h:
                min_speed = current_speed + 1
            else:
                max_speed = current_speed

        return max_speed
