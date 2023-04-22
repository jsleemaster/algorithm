
const solution = (num) => {
  //에라토스테네스의 체
  //1. 2부터 num까지의 모든 자연수를 나열한다.
  //2. 남은 수 중에서 아직 처리하지 않은 가장 작은 수 i를 찾는다.
  //3. 남은 수 중에서 i의 배수를 모두 제거한다
  //4. 더 이상 반복할 수 없을 때까지 2번과 3번의 과정을 반복한다. 
  const arr = Array.from({ length: num + 1 }).fill(true);
  const sqrt = parseInt(Math.sqrt(num));

  for (let i = 2; i <= sqrt; i++) {
    if (arr[i] === true) {
      for (let j = 2; i * j <= num; j++) {
        arr[i * j] = false;
      }
    }
  }

  //에라토스테네스의 체 2
  let sieve = new Array(3001).fill(true);
  for (let i = 2; i * i < sieve.length; i += 1) {
    if (!sieve[i]) continue;
    for (let j = i + i; j < sieve.length; j += i) {
      sieve[j] = false;
    }
  }
  console.log(sieve, arr)
}

solution(16)
