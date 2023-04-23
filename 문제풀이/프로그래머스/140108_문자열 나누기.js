function solution(s) {
  let answer = 0;
  let x = s[0];
  let count = 0;
  let diffcount = 0;
  for (let i = 0; i < s.length; i++) {
    const string = s[i];
    if (x === string) {
      count++;
    } else {
      diffcount++
    }

    if (count === diffcount) {
      x = s[i + 1];
      count = 0;
      diffcount = 0;
      answer++;
      continue;
    }
    if (count > 0 && i === s.length - 1) {
      answer++;
    }
  }
  if (answer === 0) answer++;

  return answer;
}
// console.log(solution("banana"))// 3
console.log(solution("abracadabra"))// 6
// console.log(solution("aaabbaccccabba"))// 3