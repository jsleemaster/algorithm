function solution(number, k) {
  let stack = []
  for (num of number) {
    num = Number(num);
    while (stack && stack.at(-1) < num && k > 0) {
      k--;
      stack.pop()
    }
    stack.push(num)
  }
  if (k !== 0) {
    stack = stack.slice(0, -k)
  }
  return stack.join('')
}

console.log(solution("1924", 2)) //"94"
console.log(solution("1231234", 4)) //"3234"
console.log(solution("4177252841", 4))// "775841"