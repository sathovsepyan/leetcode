// https://leetcode.com/problems/jump-game/

function canJump(nums: number[]): boolean {
  if (nums.length === 1) {
    return true;
  }
  const seen: boolean[] = new Array(nums.length).fill(false);

  const possibleJumps = [];
  for (let i = 1; i <= nums[0]; i++) {
    possibleJumps.push([0, i]);
    seen[0] = true;
  }

  while (possibleJumps.length > 0) {
    const [from, jump] = possibleJumps.pop();
    seen[from] = true;

    if (from + jump >= nums.length - 1) {
      return true;
    }

    for (let i = 1; i <= jump; i++) {
      const jumpedTo = from + i;
      if (!seen[jumpedTo]) {
        possibleJumps.push([jumpedTo, nums[from + i]]);
      }
    }
  }

  return false;
}
