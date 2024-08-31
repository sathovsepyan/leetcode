### Arrays are equal

```typescript
arr1.length === arr2.length && arr1.every((item1, i) => item1 === arr2[i]);
```

### Binary search

### Map to array

```typescript
entries = [...frequencies.entries()];
keys = [...counts1.keys()];
```

### Reverse linked list

```typescript
let curr = head;
let prev = null;
while (curr !== null) {
  let tmpNext = curr.next;
  curr.next = prev;

  prev = curr;
  curr = tmpNext;
}
```

### BFS Level-order traversal

```typescript
let queue: TreeNode[] = [];
queue.push(root);

while (queue.length > 0) {
  let levelLength = queue.length;
  for (let i = 0; i < levelLength; i++) {
    let node = queue.shift();
    if (node === null) {
      continue;
    }

    queue.push(node.left);
    queue.push(node.right);
  }
}
```
