// https://leetcode.com/problems/asteroid-collision/description/

function asteroidCollision(asteroids: number[]): number[] {
  let remaining: number[] = [];
  for (let i = 0; i < asteroids.length; i++) {
    let survived = true;
    while (remaining.length > 0) {
      const latestAsteroid = remaining[remaining.length - 1];

      if ((latestAsteroid < 0 && asteroids[i] < 0) || asteroids[i] > 0) {
        break;
      }

      if (-asteroids[i] > latestAsteroid) {
        remaining.pop();
        continue;
      }

      if (-asteroids[i] === latestAsteroid) {
        remaining.pop();
        survived = false;
        break;
      }

      if (-asteroids[i] < latestAsteroid) {
        survived = false;
        break;
      }
    }

    if (survived) {
      remaining.push(asteroids[i]);
    }
  }

  return remaining;
}

console.log(asteroidCollision([-2, -1, 1, 2]));
