function solution(n) {
  if (n <= 2) return n;
  const answer = [0, 1, 2]

  for (let i = 3; i <= n; i++) {
    answer[i] = (answer[i - 1] + answer[i - 2]) % 1234567
  }

  return answer[n];
}