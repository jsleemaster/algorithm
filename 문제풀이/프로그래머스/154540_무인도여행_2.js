function solution(maps) {
  const answer = []
  maps = maps.map(row => row.split(''))

  const [row, col] = [maps.length - 1, maps[0].length - 1]

  const dir = [
    [0, 1],
    [1, 0],
    [0, -1],
    [-1, 0]
  ];

  for (let i = 0; i <= row; i++) {
    for (let j = 0; j <= col; j++) {
      let value = maps[i][j]
      // 방문 확인
      if (value === 'X') continue
      // 방문 처리
      maps[i][j] = 'X'

      value = Number(value)
      const queue = [[i, j]]
      while (queue.length !== 0) {
        const [x, y] = queue.shift()
        const check = (nx, ny) => 0 > nx || nx > row || 0 > ny || ny > col

        // 네방향 확인
        for (const [dx, dy] of dir) {
          const [nx, ny] = [x + dx, y + dy]
          //범위 벗어나는거 체크
          if (check(nx, ny)) continue
          let nextValue = maps[nx][ny]
          if (nextValue === 'X') continue

          // 방문
          maps[nx][ny] = 'X'
          // 계산
          value += Number(nextValue)
          queue.push([nx, ny])
        }
      }
      answer.push(value)
    }
  }
  if (answer.length === 0) return [-1]
  answer.sort((a, b) => a - b)
  return answer
}

console.log(solution(["X591X", "X1X5X", "X231X", "1XXX1"])) //[1, 1, 27]
