# https://leetcode.com/problems/best-time-to-buy-and-sell-stock/


import math


class Solution:
    def maxProfitForward(self, prices: list[int]) -> int:
        """
        Iterate over the list. Keep track of the lowest price seen so far and
        the max profit we have been able to make so far.

        Each element may be the new smallest one (buy here),
        it may be the one giving max profit with a previously seen smallest one (sell here),
        or none (just ignore).
        """
        min_seen = -math.inf
        max_profit = 0

        for price in prices:
            if price < min_seen:
                min_seen = price
            elif price - min_seen > max_profit:
                max_profit = price - min_seen

        return max_profit

    def maxProfit(self, prices: list[int]) -> int:
        """
        For each item, we need to know what's the largest after this
        So we can start from the back, and add this largest item into a memo array
        However, when we use this array, we don't need all of it,
        we only need one item that is the largest from the end so far
        """
        max_seen_after = prices[len(prices) - 1]
        max_profit = 0
        for i in reversed(range(0, len(prices) - 1)):
            max_seen_after = max(max_seen_after, prices[i + 1])
            max_profit = max(max_profit, max_seen_after - prices[i])

        return max_profit

    def maxProfitFirstThought(self, prices: list[int]) -> int:
        max_after = [0] * (len(prices) - 1)
        max_seen = prices[len(prices) - 1]

        for i in reversed(range(0, len(max_after))):
            max_seen = max(max_seen, prices[i + 1])
            max_after[i] = max_seen

        max_profit = 0
        for i in range(0, len(max_after)):
            max_profit = max(max_profit, max_after[i] - prices[i])

        return max_profit
