function solution(maps) {
  const dir = [
    [0, 1],
    [1, 0],
    [0, -1],
    [-1, 0]
  ]
  let row = maps.length;
  let col = maps[0].length;

  const visited = Array.from(Array(row), () => Array(col).fill(false))
  const queue = [[0, 0, 0]];

  const check = (nx, ny) => {
    return 0 <= nx && nx < row && 0 <= ny && ny < col
  }

  while (queue.length) {
    const [x, y, cnt] = queue.shift();
    for (const [dx, dy] of dir) {
      const nx = dx + x;
      const ny = dy + y;
      if (x === (row - 1) && y === (col - 1)) return cnt + 1;

      if (!check(nx, ny)) continue;

      if (maps[nx][ny] === 0) continue;
      if (visited[nx][ny]) continue;


      visited[nx][ny] = true;
      queue.push([nx, ny, cnt + 1])

    }

  }
  return -1

}
console.log(solution([[1, 0, 1, 1, 1], [1, 0, 1, 0, 1], [1, 0, 1, 1, 1], [1, 1, 1, 0, 1], [0, 0, 0, 0, 1]])) // 11