function solution(arr) {
  /**
   * a * b = GCD(최대공약수) * LCM (최대공배수)
   * GCD = a % b === 0 
   * LCM = (a * b) / GCD 
   * 유클리드 호제법 (a > b)
   * a % b === 0 ? b = GCD : 계속 나눔 0이 될때까지 b % c(c = a % b라고 할 때)
   */
  const stack = [];
  const GCD = (a, b) => {
    if (a % b === 0) {
      return b
    } else {
      return GCD(b, Math.floor(a % b))
    }
  }
  const LCM = (a, b) => {
    return Math.floor(a * b / GCD(a, b))
  }

  for (const value of arr) {
    if (!stack.length) {
      stack.push(value)
    } else {
      stack.push(LCM(stack.pop(), value))
    }
  }
  return stack[0];
}

console.log(solution([2, 6, 8, 14])) //168