function solution(s) {
  let answer = s.split(" ");
  let max = Number.MIN_SAFE_INTEGER;
  let min = Number.MAX_SAFE_INTEGER;
  answer.forEach((value) => {
    max = Math.max(value, max)
    min = Math.min(value, min)
  })
  return String(min) + " " + String(max);
}

// console.log(solution("1 2 3 4")) //"1 4"
console.log(solution("-1 -2 -3 -4"))//"-4 -1"

