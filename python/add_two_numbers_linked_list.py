# https://leetcode.com/problems/add-two-numbers/description/

from typing import Optional


# Definition for singly-linked list.
class ListNode:
    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next


class Solution:
    def addTwoNumbers(
        self, l1: Optional[ListNode], l2: Optional[ListNode]
    ) -> Optional[ListNode]:
        carry = 0
        sum_head = ListNode()
        sum_current = sum_head

        while l1 or l2 or carry != 0:
            v1 = l1.val if l1 else 0
            v2 = l2.val if l2 else 0

            sum_current.next = ListNode((v1 + v2 + carry) % 10)
            carry = (v1 + v2 + carry) // 10

            sum_current = sum_current.next
            l1 = l1.next if l1 else None
            l2 = l2.next if l2 else None

        return sum_head.next
