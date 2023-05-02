function solution(n) {
  const answer = [];

  function dfs(n, from, through, to) {
    if (n === 1) {
      answer.push([from, to]); // 원판이 1개면 from에서 to로 바로 이동합니다.
      return;
    }

    dfs(n - 1, from, to, through); // n-1개 원판을 from에서 through로 옮깁니다.
    answer.push([from, to]); // 가장 큰 원판을 from에서 to로 이동합니다.
    dfs(n - 1, through, from, to); // n-1개 원판을 through에서 to로 옮깁니다.
  }

  dfs(n, 1, 2, 3); // 첫번째 기둥에 n개의 원판이 있고, 두번째 기둥을 보조로, 세번째 기둥을 목적지로 설정합니다.
  return answer;
}

// console.log(solution(2)); // [ [1,2], [1,3], [2,3] ]

