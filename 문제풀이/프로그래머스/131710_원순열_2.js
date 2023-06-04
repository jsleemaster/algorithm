function solution(elements) {
  const circular = elements.concat(elements);
  const set = new Set();
  for (let i = 0; i <= elements.length; i++) {
    let sum = 0;
    for (let j = 0; j < elements.length; j++) {
      //연속하는 수열의 합
      sum += circular[i + j];
      set.add(sum);
    }
  }

  return set.size;
}

// console.log(solution([7, 9, 1, 1, 4])) //18
console.log(solution([3, 1, 2, 2]))