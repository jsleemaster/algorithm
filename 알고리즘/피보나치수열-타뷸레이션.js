//피보나치수열
const fib = (number) => {
  //공간을 이용
  if (number <= 2) return 1;
  let value = [0, 1, 1]
  for (let i = 3; i < number; i++) {
    value[i] = value[i - 1] + value[i - 2];
  }
  return value[n];
}