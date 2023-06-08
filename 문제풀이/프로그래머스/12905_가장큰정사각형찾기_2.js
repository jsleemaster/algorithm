function solution(board) {
  const row = board.length;
  const column = board[0].length;

  if (row <= 1 || column <= 1) return 1;

  let answer = 0;
  for (let i = 0; i < row; i++) {
    for (let j = 0; j < column; j++) {
      if (board[i][j] >= 1) {
        let over = board[i][j]
        let up = null
        let down = null
        if (i >= 1) {
          up = board[i - 1][j]
        }
        if (j >= 1) {
          down = board[i][j - 1];
        }
        if (i >= 1 && j >= 1) {
          over = board[i - 1][j - 1];
        }
        if (!up && !down) continue;
        if (over >= 1 && up >= 1 && down >= 1) {
          board[i][j] = Math.min(over, up, down) + 1;
        }
        answer = Math.max(answer, board[i][j]);
      }
    }
  }
  return answer ** 2;
}


console.log(solution([[0, 1, 1, 1], [1, 1, 1, 1], [1, 1, 1, 1], [0, 0, 1, 0]])) //9
console.log(solution([[0, 0, 1, 0],
[1, 0, 0, 0],
[0, 0, 0, 0],
[0, 0, 0, 0]])) //1