// https://leetcode.com/problems/odd-even-linked-list

function oddEvenList(head: ListNode | null): ListNode | null {
  if (head === null || head.next === null || head.next.next === null) {
    return head;
  }

  let odds = head;
  let evensHead = odds.next;
  let evens = evensHead;

  while (odds.next !== null && odds.next.next !== null) {
    odds.next = odds.next.next;
    odds = odds.next;

    evens!.next = odds.next;
    evens = evens!.next;
  }

  odds.next = evensHead;

  return head;
}

// [1,2,3,4,5]
oddEvenList(
  new ListNode(
    1,
    new ListNode(2, new ListNode(3, new ListNode(4, new ListNode(5))))
  )
);
