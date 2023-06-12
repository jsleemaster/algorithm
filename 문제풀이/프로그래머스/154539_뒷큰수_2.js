function solution(numbers) {
  const answer = Array(numbers.length).fill(-1);
  const stack = [];

  for (let ind in numbers) {
    const num = numbers[ind];
    while (stack.length > 0 && numbers[stack[stack.length - 1]] < num) {
      answer[stack.pop()] = num;
    }
    stack.push(ind);
  }

  return answer;
}

function solution(numbers) {
  const answer = Array(numbers.length).fill(-1)
  const stack = []

  for (let i = 0; i < numbers.length; i++) {
    const count = numbers[i];
    let j = i + 1
    let max = numbers[j];
    while (stack.length !== 0) {
      if (!numbers[j]) break
      const test = stack.pop();
      if (test < numbers[j]) {
        max = numbers[j];
        break;
      } else {
        stack.push(numbers[j]);
        j++
      }
    }
    if (count < max) {
      answer[i] = max
      stack.push(max)
    } else {
      answer[i] = -1
    }
  }

  return answer;
}

// console.log(solution([2, 3, 3, 5]))//	[3, 5, 5, -1]
console.log(solution([9, 1, 5, 3, 6, 2])) //[-1, 5, 6, 6, -1, -1]))