function solution(m, n, board) {
  let curBoard = [...board.map(value => [...value])]
  let newBoard = [...board.map(value => [...value])]

  const check = (x, y) => {
    return curBoard[x][y] === curBoard[x][y + 1] && curBoard[x][y] === curBoard[x + 1][y] && curBoard[x][y] === curBoard[x + 1][y + 1]
  }

  while (true) {
    let count = 0;
    for (let x = 0; x < m - 1; x++) {
      for (let y = 0; y < n - 1; y++) {
        if (!curBoard[x][y]) continue;
        if (check(x, y)) {
          newBoard[x][y] = '';
          newBoard[x + 1][y] = '';
          newBoard[x][y + 1] = '';
          newBoard[x + 1][y + 1] = '';
          count += 1;
        }
      }
    }

    for (let x = 0; x < m - 1; x++) {
      for (let y = 0; y < n; y++) {
        if (!newBoard[x + 1][y]) {
          for (let i = x; i >= 0; i--) {
            newBoard[i + 1][y] = newBoard[i][y];
            newBoard[i][y] = '';
          }
        }
      }
    }
    curBoard = [...newBoard.map(value => [...value])];
    if (count === 0) break;
  }

  const allBoards = newBoard.reduce((acc, cur) => acc.concat(cur));
  return allBoards.filter(value => !value).length;
}

console.log(solution(4, 5, ["CCBDE", "AAADE", "AAABF", "CCBBF"]))//14