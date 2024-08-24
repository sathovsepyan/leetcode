// https://leetcode.com/problems/delete-the-middle-node-of-a-linked-list/

class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

function deleteMiddle(head: ListNode | null): ListNode | null {
  if (head === null || head.next === null) {
    return null;
  }

  let index = 0;
  let curr = head;
  let delNextNode: ListNode = head;
  while (curr.next !== null) {
    if (index > 0 && index % 2 === 0) {
      delNextNode = delNextNode.next!;
    }

    curr = curr.next;
    index++;
  }

  delNextNode.next = delNextNode.next!.next;
  return head;
}

function deleteMiddleFastAndSlow(head: ListNode | null): ListNode | null {
  if (head === null || head.next === null) {
    return null;
  }

  let slow = head; // slow is the pointer to the previous element to be deleted
  let fast = head.next;

  while (fast?.next !== null && fast?.next.next !== null) {
    slow = slow.next;
    fast = fast?.next.next;
  }

  slow.next = slow.next?.next;

  return head;
}
