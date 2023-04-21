function solution(X, Y) {
  const answer = [];
  const XObj = {}
  for (let i = 0; i < X.length; i++) {
    if (XObj[X[i]] === undefined) {
      XObj[X[i]] = 1;
      continue;
    }
    XObj[X[i]] += 1;
  }
  for (let i = 0; i < Y.length; i++) {
    if (XObj[Y[i]]) {
      XObj[Y[i]] -= 1;
      answer.push(Number(Y[i]))
    }
  }
  answer.sort((a, b) => b - a);
  let j = 0;
  while (answer[j] === 0) {
    answer[j] = ''
    j++
  }
  if (answer[answer.length - 1] === '') answer[answer.length - 1] = '0'
  return answer.length > 0 ? String(answer.join('')) : '-1'
}
// console.log(solution("100", "2345")) // "-1"
// console.log(solution("100", "203045")) // "0"
console.log(solution("10000", "0000000000")) // "0000"
// console.log(solution("12321", "42531")) // "321"