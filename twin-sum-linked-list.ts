// https://leetcode.com/problems/maximum-twin-sum-of-a-linked-list/

class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

function pairSum(head: ListNode | null): number {
  let curr = head;
  let n = 0;
  while (curr !== null) {
    n++;
    curr = curr.next;
  }

  let firstHalf = [];

  curr = head;
  let i = 0;
  let max = 0;
  while (curr !== null) {
    if (i < n / 2) {
      firstHalf.push(curr.val);
    } else {
      max = Math.max(max, firstHalf.pop() + curr.val);
    }

    i++;
    curr = curr.next;
  }

  return max;
}

function pairSumInPlaceReverse(head: ListNode | null): number {
  let slow = head;
  let fast = head;

  while (fast !== null && fast.next !== null) {
    slow = slow.next;
    fast = fast.next.next;
  }

  // now slow is the middle element
  // reverse linked list in place starting from slow
  let prev = null;
  while (slow !== null) {
    let tmpNext = slow.next;
    slow.next = prev;

    prev = slow;
    slow = tmpNext;
  }

  // now prev has the reversed second half
  let curr = head;
  let max = 0;
  while (prev !== null) {
    max = Math.max(max, curr.val + prev.val);

    curr = curr.next;
    prev = prev.next;
  }

  return max;
}
