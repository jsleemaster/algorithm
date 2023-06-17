function solution(dirs) {
  const direction = {
    'U': [0, 1],
    'D': [0, -1],
    'L': [-1, 0],
    'R': [1, 0]
  };

  const stack = [...dirs];
  const set = new Set();
  const Boundary = 10 / 2
  let [x, y] = [0, 0];

  while (stack.length) {
    const step = stack.shift();

    const oldX = x;
    const oldY = y;

    x += direction[step][0];
    y += direction[step][1];

    if (x < -Boundary || x > Boundary || y < -Boundary || y > Boundary) {
      x -= direction[step][0];
      y -= direction[step][1];
      continue;
    }

    set.add(`[${oldX},${oldY}] => [${x},${y}]`);
    set.add(`[${x},${y}] => [${oldX},${oldY}]`);
  }

  return set.size / 2;
}
