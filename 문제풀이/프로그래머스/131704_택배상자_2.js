function solution(order) {
  const answer = [];
  const assistance = [];
  let idx = 0;
  for (let i in order) {
    i = Number(i) + 1
    if (order[idx] !== i) {
      assistance.push(i);
      continue;
    }
    idx++;
    answer.push(i)
    while (assistance.length && order[idx] === assistance.at(-1)) {
      const last = assistance.pop()
      answer.push(last)
      idx++;
    }
  }
  return answer.length;
}

console.log(solution([4, 3, 1, 2, 5]))//2
console.log(solution([5, 4, 3, 2, 1]))//5