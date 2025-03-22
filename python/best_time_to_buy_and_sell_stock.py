# https://leetcode.com/problems/best-time-to-buy-and-sell-stock/


class Solution:
    def maxProfit(self, prices: list[int]) -> int:
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
