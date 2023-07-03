function solution(N, road, K) {

  const createNode = (end, time) => {
    return {
      end,
      time
    };
  };
  const map = Array.from(Array(N + 1), () => []);

  // 도로 세팅
  for (let i = 0; i < road.length; i++) {
    const start = road[i][0];
    const end = road[i][1];
    const time = road[i][2];

    map[start].push(createNode(end, time));
    map[end].push(createNode(start, time));
  }



  const visit = new Array(N + 1).fill(false);
  visit[1] = true;

  const visited = new Array(N + 1).fill(false);
  visited[1] = true;


  function dfs(map, visited, start, distance) {
    for (let i = 0; i < map[start].length; i++) {
      const n = map[start][i];
      const end = n.end;
      const time = n.time;
      if (!visited[end] && distance + time <= K) {
        visited[end] = true;
        visit[end] = true;
        dfs(map, visited, end, distance + time);
        visited[end] = false;
      }
    }
  }
  dfs(map, visited, 1, 0);

  let count = 0;
  for (let i = 0; i < visit.length; i++) {
    if (visit[i]) {
      count++;
    }
  }

  return count;
}


//4
console.log(solution(5, [[1, 2, 1], [2, 3, 3], [5, 2, 2], [1, 4, 2], [5, 3, 1], [5, 4, 2]], 3)) 