# https://leetcode.com/problems/insert-delete-getrandom-o1/description/

import random


class RandomizedSet:
    def __init__(self):
        self.value_to_index = dict()
        self.values: list[int] = []

    def insert(self, val: int) -> bool:
        if val in self.value_to_index:
            return False

        self.value_to_index[val] = len(self.values)
        self.values.append(val)
        return True

    def remove(self, val: int) -> bool:
        if val not in self.value_to_index:
            return False

        index_to_remove = self.value_to_index[val]
        last_value = self.values[-1]
        # bring last value to the index of the item that's being removed
        self.values[index_to_remove] = last_value
        # update the mapping for the value that moved in the place of removed item
        self.value_to_index[last_value] = index_to_remove

        self.values.pop()
        del self.value_to_index[val]

        return True

    def getRandom(self) -> int:
        r = random.randint(0, len(self.values) - 1)
        return self.values[r]


# Your RandomizedSet object will be instantiated and called as such:
# obj = RandomizedSet()
# param_1 = obj.insert(val)
# param_2 = obj.remove(val)
# param_3 = obj.getRandom()
