function solution(n) {
  if (n <= 2) return n;
  // 3으로 나눈 나머지의 값
  const num = {
    0: 4,
    1: 1,
    2: 2,
  }
  const answer = [];
  while (n > 0) {
    let tmp = Math.floor(n % 3);
    answer.push(num[tmp]);
    n = Math.floor(n / 3);
    if (tmp === 0) {
      n--;
    }
  }

  return answer.reverse().join('');
}
console.log(solution(4));
console.log(solution(7));
console.log(solution(10));

/*
  1	1       6	14
  2	2     	7	21
  3	4	      8	22
  4	11	    9	24
  5	12	   10	41
*/