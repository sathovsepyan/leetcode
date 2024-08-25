class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

function reverseList(head: ListNode | null): ListNode | null {
  if (head === null) {
    return null;
  }

  let curr = head;
  let prev = null;

  while (curr !== null) {
    let next = curr.next;
    curr.next = prev;

    prev = curr;
    curr = next;
  }

  return prev;
}

function reverseListExtraSpace(head: ListNode | null): ListNode | null {
  if (head === null) {
    return null;
  }

  let reverse = new ListNode(head.val);

  while (head.next !== null) {
    reverse = new ListNode(head.next.val, reverse);
    head = head?.next;
  }

  return reverse;
}

// [1,2,3,4,5]
const head = new ListNode(
  1,
  new ListNode(2, new ListNode(3, new ListNode(4, new ListNode(5))))
);
console.log(reverseList(head));
