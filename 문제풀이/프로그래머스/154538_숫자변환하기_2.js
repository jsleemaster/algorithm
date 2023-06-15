function solution(x, y, n) {
  if (x === y) return 0;
  const dp = {};
  dp[x] = 0;
  let data = [x];
  while (data.length) {
    const newData = [];
    for (const d of data) {
      for (const e of [d + n, d * 2, d * 3]) {
        if (e > y || dp[e]) continue; // 값이 저장되어 있거나 y보다 큰값은 넘어가기
        if (e === y) return dp[d] + 1; //최소 횟수
        dp[e] = dp[d] + 1; // 횟수가 저장 되어있지 않은곳에 값 저장
        newData.push(e); //저장되어 있지 않은 수부터 계산 시작
      }
    }
    data = newData;
  }
  return -1;
}

console.log(solution(10, 40, 5))