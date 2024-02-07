// https://leetcode.com/problems/divide-players-into-teams-of-equal-skill/description/

function dividePlayers(skill: number[]): number {
  skill.sort((a, b) => a - b);

  let totalSkill = skill[0] + skill[skill.length - 1];

  let chemistry = 0;
  for (let i = 0; i < skill.length / 2; i++) {
    if (skill[i] + skill[skill.length - 1 - i] !== totalSkill) {
      return -1;
    }

    chemistry += skill[i] * skill[skill.length - 1 - i];
  }

  return chemistry;
}

console.log(dividePlayers([13, 1, 14, 3, 2, 15]));
