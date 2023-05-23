function solution(n) {
  let answer = 0;
  while (n !== 0) {
    if (n % 2 !== 0) {
      n -= 1;
      answer++;
    }
    n = Math.floor(n / 2);
  }
  return answer;
}

console.log(solution(5000))