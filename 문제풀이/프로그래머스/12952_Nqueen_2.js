function solution(n) {

  const board = Array(n).fill(0);
  let answer = 0;

  const valid = (i) => {
    for (let j = 0; j < i; j++) {
      if (board[i] === board[j]) return false;
      if (Math.abs(i - j) === Math.abs(board[i] - board[j])) return false;
    }
    return true;
  }

  const backTracking = (depth, n) => {
    if (depth === n) {
      answer++;
      return;
    }
    for (let i = 0; i < n; i++) {
      board[depth] = i;
      if (valid(depth)) {
        backTracking(depth + 1, n);
      }
    }
  }
  backTracking(0, n);

  return answer;
}

console.log(solution(4))//2