function asteroidCollision(asteroids) {
  let stack = [];

  for (let asteroid of asteroids) {
    let destroyed = false;

    while (
      stack.length &&
      stack[stack.length - 1] > 0 &&
      asteroid < 0
    ) {
      if (stack[stack.length - 1] < Math.abs(asteroid)) {
        stack.pop();
        continue;
      } else if (stack[stack.length - 1] === Math.abs(asteroid)) {
        stack.pop();
        destroyed = true;
        break;
      } else {
        destroyed = true;
        break;
      }
    }

    if (!destroyed) {
      stack.push(asteroid);
    }
  }
}

asteroidCollision([10, 2, -5]);      // [10]
asteroidCollision([5, 10, -5]);      // [5, 10]
asteroidCollision([8, -8]);          // []
asteroidCollision([10, -10]);        // []
asteroidCollision([-2, -1, 1, 2]);   // [-2, -1, 1, 2]
