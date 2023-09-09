/**
 * 초 단위로 기록된 주식가격이 담긴 배열 prices가 매개변수로 주어질 때, 
 * 가격이 떨어지지 않은 기간은 몇 초인지를 return 하도록 solution 함수를 완성하세요.
 * @param {*} prices 
 * @returns 
 */
function solution(prices) {
  const answer = new Array(prices.length).fill(0);
  for (let i = 0; i < prices.length; i++) {
    for (let j = i + 1; j < prices.length; j++) {
      answer[i]++;
      if (prices[j] < prices[i]) {
        break;
      }
    }
  }
  return answer;
}