function solution(brown, yellow) {
  const answer = [];
  const area = brown + yellow
  for (let i = 3; i <= area; i++) {
    if (area % i === 0) {
      let num = area / i;

      if ((i - 2) * (num - 2) === yellow) {
        answer.push(num);
        answer.push(i);
        break;
      }
    }
  }
  return answer;
}

console.log(solution(10, 2))//[4,3]