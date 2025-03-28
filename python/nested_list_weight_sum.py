# https://leetcode.com/problems/nested-list-weight-sum/

"""
This is the interface that allows for creating nested lists.
You should not implement it, or speculate about its implementation
"""


class NestedInteger:
    def __init__(self, value=None):
        """
        If value is not specified, initializes an empty list.
        Otherwise initializes a single integer equal to value.
        """

    def isInteger(self):
        """
        @return True if this NestedInteger holds a single integer, rather than a nested list.
        :rtype bool
        """

    def add(self, elem):
        """
        Set this NestedInteger to hold a nested list and adds a nested integer elem to it.
        :rtype void
        """

    def setInteger(self, value):
        """
        Set this NestedInteger to hold a single integer equal to value.
        :rtype void
        """

    def getInteger(self):
        """
        @return the single integer that this NestedInteger holds, if it holds a single integer
        The result is undefined if this NestedInteger holds a nested list
        :rtype int
        """

    def getList(self):
        """
        @return the nested list that this NestedInteger holds, if it holds a nested list
        The result is undefined if this NestedInteger holds a single integer
        :rtype List[NestedInteger]
        """


class Solution:
    def depthSum(self, nestedList: list[NestedInteger]) -> int:
        # (nestedInteger, depth) pairs
        stack: list[tuple[NestedInteger, int]] = [(item, 1) for item in nestedList]
        sum = 0
        while stack:
            (item, depth) = stack.pop()
            if item.isInteger():
                sum += item.getInteger() * depth
            else:
                for nested_item in item.getList():
                    stack.append((nested_item, depth + 1))

        return sum
