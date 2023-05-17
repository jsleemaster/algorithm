function solution(want, number, discount) {
  const obj = {}
  want.forEach((wants, idx) => obj[wants] = number[idx]);

  let answer = 0;
  for (let i = 0; i < discount.length; i++) {
    let obj2 = { ...obj }

    for (let j = 0; j < 10; j++) {
      if (!discount[i + j]) break;
      if (Object.hasOwn(obj2, discount[i + j])) {
        if (obj2[discount[i + j]] <= 0) continue;
        obj2[discount[i + j]] -= 1;
      }
    }

    let count = Object.values(obj2).reduce((a, b) => a + b, 0);
    if (count === 0) {
      answer++;
    }
  }
  return answer;
}
//3
console.log(solution(["banana", "apple", "rice", "pork", "pot"], [3, 2, 2, 2, 1],
  ["chicken", "apple", "apple", "banana",
    "rice", "apple", "pork", "banana",
    "pork", "rice", "pot", "banana", "apple", "banana"]))