function solution(begin, end) {

  const maxdivisor = (num) => {
    if (num === 1) {
      return 0;
    }
    const arr = [1];
    for (let i = 2; i <= Math.floor(Math.sqrt(num)); i++) {
      if (num % i === 0 && i <= 10000000) {
        arr.push(i);
        if ((num / i) <= 10000000 && (num / i) !== num) {
          arr.push((num / i));
          break;
        }
      }
    }

    return Math.max(...arr);
  }

  const answer = [];
  for (let i = begin; i <= end; i++) {
    answer.push(maxdivisor(i))
  }
  return answer;
}

//[0, 1, 1, 2, 1, 3, 1, 4, 3, 5]
console.log(solution(1, 10))