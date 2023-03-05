let row, col;

function solution(maps) {
  let startX, startY, endX, endY, lbX, lbY

  row = maps.length;
  col = maps[0].length;

  for (let i = 0; i < row; i++) {
    for (let j = 0; j < col; j++) {
      if (maps[i][j] === "S") {
        startX = i;
        startY = j;
      }
      if (maps[i][j] === "E") {
        endX = i;
        endY = j;
      }
      if (maps[i][j] === "L") {
        lbX = i;
        lbY = j;
      }
    }
  }

  const dir = [
    [0, 1],
    [1, 0],
    [0, -1],
    [-1, 0]
  ];

  const check = (nx, ny) => {
    return 0 <= nx && nx < row && 0 <= ny && ny < col;
  }

  const bfs = (sX, sY, eX, eY) => {
    const visited = Array.from(Array(row), () => Array(col).fill(false));
    let queue = [[sX, sY, 0]];
    visited[sX][sY] = true;

    while (queue.length) {

      const [x, y, cnt] = queue.shift();

      for (const [dx, dy] of dir) {
        const nx = x + dx;
        const ny = y + dy;

        if (!check(nx, ny)) continue;

        if (maps[nx][ny] === "X") continue;
        if (visited[nx][ny]) continue;
        if (nx === eX && ny === eY) return cnt + 1;

        visited[nx][ny] = true;
        queue.push([nx, ny, cnt + 1])
      }
    }

    return -1

  }

  const d1 = bfs(startX, startY, lbX, lbY)
  if (d1 === -1) return -1;
  const d2 = bfs(lbX, lbY, endX, endY)
  if (d2 === -1) return -1;

  return d1 + d2;
}