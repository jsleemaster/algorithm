
function solution(N, stages) {
  const answer = {}
  for (let i = 1; i <= N; i++) {
    answer[i] = { count: 0, key: i }
  }
  const total = stages.length;
  for (let i = 0; i <= total; i++) {
    const user = stages[i]
    if (!answer[user]) continue;
    answer[user].count += 1
  }

  let failure = 0;
  for (let i = 1; i <= N; i++) {
    const count = answer[i].count;
    answer[i].percent = count === 0 ? 0 : count / (total - failure);
    failure += count;
  }

  return Object.values(answer).sort((a, b) => b.percent - a.percent).map((value) => value.key)

}
