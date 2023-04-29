function solution(a, b) {
  var answer = 0;
  const res1 = a.sort((a, b) => a - b)
  const res2 = b.sort((a, b) => b - a)
  for (i = 0; i < res1.length; i++) {
    answer += res1[i] * res2[i]
  }
  return answer;
}
// console.log(solution([1, 4, 2][5, 4, 4])) //29
console.log(solution([1, 2], [3, 4]))//10