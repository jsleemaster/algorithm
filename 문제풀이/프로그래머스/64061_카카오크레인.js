function solution(board, moves) {
  let answer = 0;
  const obj = {}
  for (let x = 0; x < board.length; x++) {
    for (let y = 0; y < board[0].length; y++) {
      if (obj[y] === undefined) {
        obj[y] = []
      }
      if (board[x][y] === 0) continue;
      obj[y].unshift(board[x][y])
    }
  }
  const stack = [];
  for (let i = 0; i < moves.length; i++) {
    const move = moves[i];

    const number = obj[move - 1].pop()
    if (number === undefined) continue;
    stack.push(number)
    if (stack[stack.length - 1] === stack[stack.length - 2]) {
      stack.pop()
      stack.pop()
      answer++;
      answer++;
    }
  }
  return answer
}
// solution([[0, 0, 0, 0, 0], [0, 0, 1, 0, 3], [0, 2, 5, 0, 1], [4, 2, 4, 4, 2], [3, 5, 1, 3, 1]], [1, 5, 3, 5, 1, 2, 1, 4])
// solution([[0, 0, 0, 0], [0, 0, 0, 0], [0, 4, 4, 0], [1, 2, 2, 1]], [2, 3, 1, 4, 2, 3]) //6
solution([[0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0]], [1, 2, 3, 4]) //0