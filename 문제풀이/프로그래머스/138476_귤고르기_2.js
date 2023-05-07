function solution(k, tangerine) {
  let answer = 0;
  const tanger = {}
  tangerine.forEach(element => tanger[element] = (tanger[element] || 0) + 1);

  const sortArr = Object.values(tanger).sort((a, b) => b - a);

  for (const value of sortArr) {
    answer++
    if (k > value) k -= value
    else break
  }

  return answer
}

console.log(solution(6, [1, 3, 2, 5, 4, 5, 2, 3])) //3