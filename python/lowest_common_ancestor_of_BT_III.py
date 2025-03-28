# https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-tree-iii


# Definition for a Node.
class Node:
    def __init__(self, val):
        self.val = val
        self.left = None
        self.right = None
        self.parent = None


class Solution:
    def lowestCommonAncestor(self, p: "Node", q: "Node") -> "Node":
        p_ancestors: set[int] = set()

        while p is not None:
            p_ancestors.add(p.val)
            p = p.parent

        while q is not None:
            if q.val in p_ancestors:
                return q

            q = q.parent

        return None
