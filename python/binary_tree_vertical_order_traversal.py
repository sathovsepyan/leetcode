# https://leetcode.com/problems/binary-tree-vertical-order-traversal/

"""
Given the root of a binary tree, return the vertical order traversal of its nodes' values. (i.e., from top to bottom, column by column).

If two nodes are in the same row and column, the order should be from left to right.

Example 1:
Input: root = [3,9,20,null,null,15,7]
Output: [[9],[3,15],[20],[7]]

Example 2:
Input: root = [3,9,8,4,0,1,7]
Output: [[4],[9],[3,0,1],[8],[7]]

Example 3:
Input: root = [1,2,3,4,10,9,11,null,5,null,null,null,null,null,null,null,6]
Output: [[4],[2,5],[1,10,9,6],[3],[11]]


Constraints:
The number of nodes in the tree is in the range [0, 100].
-100 <= Node.val <= 100
"""

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
