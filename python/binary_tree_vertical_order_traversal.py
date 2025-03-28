# https://leetcode.com/problems/binary-tree-vertical-order-traversal/

from collections import deque


# Definition for a binary tree node.
class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right


class Solution:
    def verticalOrder(self, root: TreeNode | None) -> list[list[int]]:
        if not root:
            return []

        col_map: dict[int, list[int]] = {}

        queue: deque[tuple[TreeNode, int]] = deque([])
        queue.append((root, 0))
        while queue:
            item, index = queue.popleft()
            if index not in col_map:
                col_map[index] = []
            col_map[index].append(item.val)

            if item.left:
                queue.append((item.left, index - 1))
            if item.right:
                queue.append((item.right, index + 1))

        lowest_key = abs(min(col_map.keys()))
        res: list[list[int]] = [[0]] * len(col_map.keys())
        for key, val in col_map.items():
            res[key + lowest_key] = val

        return res
