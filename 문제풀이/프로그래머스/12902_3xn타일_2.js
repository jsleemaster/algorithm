function solution(n) {

  let value = [1, 1, 3]
  for (let i = 3; i <= n; i++) {
    value[i] = ((value[i - 2] * 4 % 1000000007) - (value[i - 4] % 1000000007) + 1000000007) % 1000000007
  }
  return value[n];

}