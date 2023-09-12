/**
 * 
 * 한자리 숫자가 적힌 종이 조각이 흩어져있습니다. 흩어진 종이 조각을 붙여 소수를 몇 개 만들 수 있는지 알아내려 합니다.
  각 종이 조각에 적힌 숫자가 적힌 문자열 numbers가 주어졌을 때, 종이 조각으로 만들 수 있는 소수가 몇 개인지 return 하도록 solution 함수를 완성해주세요.
 */
function solution(numbers) {

  let num = [...numbers]

  // 순열 통해 경우의 수 구하기
  const permutation = (arr, selectNum) => {
    let result = [];
    if (selectNum === 1) return arr.map((v) => [v]);

    arr.forEach((fixer, idx, arr) => {
      const restArr = arr.filter((_, index) => index !== idx);
      const permuArr = permutation(restArr, selectNum - 1);
      result.push(...permuArr.map((per) => fixer + per));
    })
    return result
  }

  // 소수 판별
  const composite = (num) => {
    let start = 2;
    while (start <= Math.sqrt(num)) {
      if (num % start++ < 1) {
        return false;
      }
    }
    return num > 1;
  }

  let answer = []

  for (let i = 1; i <= num.length; i++) {
    permutation(num, i).forEach(v => {
      composite(Number(v)) ? answer.push(Number(v)) : answer
    })
  }
  return [...new Set(answer)].length

}
console.log(solution("011"))