function solution(number, limit, power) {
  const divisor = Array(number + 1).fill(0);
  //약수의 갯수 구하기
  /**
    기본적으로 1부터 n까지 숫자중에 n이 나누어 떨어지는수 k가 약수입니다.
    다른말로는 k*i = n이라면 k는 n의 약수라 할수 있겠죠.
    그러면 그냥 전체 범위 number까지 한번 루프를 돌려서, 
    현재 숫자 j에 대해 j*1, j*2, j*3 ...이 되는 숫자들은 
    j를 약수로 가지고 있으므로 약수의 갯수가 1 늘어난다 생각하면, 한번의 루프로 모든 수의 약수의 갯수를 구할수 있습니다.
   */
  for (let i = 1; i <= number + 1; i++) {
    for (j = i; j < number + 1; j = j + i) {
      divisor[j] += 1;
    }
  }

  return divisor.reduce((prev, curr) => {
    if (curr > limit) {
      return prev + power;
    }
    return prev + curr
  }, 0)
}

// console.log(solution(5, 3, 2)) //10
console.log(solution(10, 3, 2)) //21