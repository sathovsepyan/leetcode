### Arrays are equal

```typescript
arr1.length === arr2.length && arr1.every((item1, i) => item1 === arr2[i]);
```

### Binary search

```python
def binary_search(arr: list[int], start: int, end: int, val: int) -> int:
    mid = start + int((end - start) / 2)

    if start > end:
        return -1

    if val == arr[mid]:
        return mid
    elif val > arr[mid]:
        return binary_search(arr, mid + 1, end, val)
    elif val < arr[mid]:
        return binary_search(arr, start, mid, val)
```

```python
# Find an index *before* item

lo = 0
hi = len(arr)
while lo < hi:
    mid = (lo + hi) // 2
    if arr[mid] < r:
        lo = mid + 1
    else:
        hi = mid

return lo
```

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
