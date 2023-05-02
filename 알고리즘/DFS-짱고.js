const solution = () => {
  const graph = {
    1: [2, 3, 8],
    2: [1, 7],
    3: [1, 4, 5],
    4: [3, 5],
    5: [3, 4],
    6: [7],
    7: [6, 8],
    8: [1, 7],
  };
  const visited = Array(9).fill(false);
  const dfs = (graph, vertext, visited) => {
    visited[vertext] = true;

    for (const next of graph[vertext]) {
      if (!visited[next]) {
        dfs(graph, next, visited);
      }
    }
  };

  dfs(graph, 1, visited);

};
solution();
