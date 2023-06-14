function solution(k, dungeons) {
  const visited = Array(dungeons.length).fill(false)
  let answer = 0;
  const dfs = (dungeons, visited, use, maxCnt, cnt) => {
    for (i in dungeons) {
      // 방문하지 않은 던전이면서 입장이 가능한지
      if (!visited[i] && use >= dungeons[i][0]) {
        const newVisited = [...visited];
        newVisited[i] = true
        maxCnt = dfs(dungeons, newVisited, use - dungeons[i][1], maxCnt, cnt + 1)
        newVisited[i] = false
      }
    }
    return answer = Math.max(maxCnt, cnt)
  }
  return dfs(dungeons, visited, k, answer, 0)

}

console.log(solution(80, [[80, 20], [50, 40], [30, 10]]))// 3
