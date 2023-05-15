function solution(n) {

  let value = [1, 1, 2]
  for (let i = 3; i <= n; i++) {
    value[i] = (value[i - 1] + value[i - 2]) % 1000000007;
  }
  return value[n];

}