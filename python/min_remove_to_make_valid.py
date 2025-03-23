# https://leetcode.com/problems/minimum-remove-to-make-valid-parentheses/ƒ


class Solution:
    def minRemoveToMakeValid(self, s: str) -> str:
        opening_stack: list[int] = []
        to_remove: list[int] = []

        for i, c in enumerate(s):
            if c == "(":
                opening_stack.append(i)
            elif c == ")":
                if len(opening_stack) > 0:
                    opening_stack.pop()
                else:
                    to_remove.append(i)

        to_remove += opening_stack

        if not to_remove:
            return s

        to_remove.sort()

        res = []
        res.append(s[: to_remove[0]])
        for i in range(1, len(to_remove)):
            res.append(s[to_remove[i - 1] + 1 : to_remove[i]])

        res += s[to_remove[len(to_remove) - 1] + 1 :]

        return "".join(res)


# Another approach could be to just remove all unopened closed braces in a forward run,
# then, remove all unclosed open braces in a backward run.
