//피보나치수열, 합병정렬이 이에 속한다.
const fib = (number) => {
  if (number <= 2) return 1;
  return fib(number - 1) + fib(number - 2)
}