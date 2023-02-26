//피보나치수열, 합병정렬이 이에 속한다.
const fib = (number, memo = []) => {
  //중복되는 작업이 많기 때문에 메모이제이션을 추가한다.
  if (memo[number] !== undefined) return memo[number];
  if (number <= 2) return 1;
  const value = fib(number - 1) + fib(number - 2)
  memo[number] = value;
  return memo[number];
}