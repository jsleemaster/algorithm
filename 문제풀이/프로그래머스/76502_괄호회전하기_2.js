function solution(s) {
  let answer = 0;
  const split = s.split("");
  let stack = [];
  const obj = {
    "[": 0,
    "]": 1,
    "{": 2,
    "}": 3,
    "(": 4,
    ")": 5,
  }

  for (let i = 0; i < s.length - 1; i++) {
    const slice = [...split];
    stack = [];
    while (slice.length) {
      const shift = slice.shift();
      stack.push(shift);
      const test = obj[stack[0]];
      if (test === 1 | test === 3 | test === 5) break;

      if (obj[stack[stack.length - 2]] === 0 && obj[stack[stack.length - 1]] === 1) {
        stack.pop();
        stack.pop();
      }
      if (obj[stack[stack.length - 2]] === 2 && obj[stack[stack.length - 1]] === 3) {
        stack.pop();
        stack.pop();
      }
      if (obj[stack[stack.length - 2]] === 4 && obj[stack[stack.length - 1]] === 5) {
        stack.pop();
        stack.pop();
      }
    }

    const repush = split.shift()
    split.push(repush);
    if (stack.length === 0) {
      answer++;
    }
  }

  return answer;
}


console.log(solution("[](){}")) // 3