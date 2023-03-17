function solution(board) {
  const dir = [[0, 1], [1, 0], [-1, 0], [0, -1]]

  let [row, col] = [board.length, board[0].length];
  let sx, sy, ex, ey

  for (let i = 0; i < row; i++) {
    for (let j = 0; j < col; j++) {

      if (board[i][j] === "R") {
        sx = i
        sy = j
      }
      if (board[i][j] === "G") {
        ex = i
        ey = j
      }
    }
  }

  const visited = Array.from(Array(row), () => Array(col).fill(false))
  visited[sx][sy] = true
  let queue = [[sx, sy, 0]]

  const check = (nx, ny) => {
    return 0 <= nx && nx < row && 0 <= ny && ny < col
  }

  while (queue.length) {
    const [x, y, cnt] = queue.shift();
    for (const [dx, dy] of dir) {

      let nx = x + dx
      let ny = y + dy

      while (check(nx, ny) && board[nx][ny] !== "D") {
        nx += dx
        ny += dy
      }
      nx -= dx
      ny -= dy

      if (board[nx][ny] === "G") {
        return cnt + 1
      }
      if (!visited[nx][ny]) {
        visited[nx][ny] = true
        queue.push([nx, ny, cnt + 1])
      }
    }
  }
  return -1
}