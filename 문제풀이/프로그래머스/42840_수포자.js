function solution(answers) {
  const A = [1, 2, 3, 4, 5];
  const B = [2, 1, 2, 3, 2, 4, 2, 5];
  const C = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];

  let countA = 0;
  let countB = 0;
  let countC = 0;

  answers.forEach((value) => {
    const numberA = A.shift();
    const numberB = B.shift();
    const numberC = C.shift();
    if (value === numberA) {
      countA++;
    }
    if (value === numberB) {
      countB++;
    }
    if (value === numberC) {
      countC++;
    }
    A.push(numberA);
    B.push(numberB);
    C.push(numberC);
  });
  const answer = [];

  if (countA >= countB && countA >= countC) {
    answer.push(1);
  }
  if (countB >= countA && countB >= countC) {
    answer.push(2);
  }
  if (countC >= countB && countC >= countA) {
    answer.push(3);
  }
  return answer;
}
// solution([1, 2, 3, 4, 5]); // [1]
solution([1, 3, 2, 4, 2]); // [1,2,3]