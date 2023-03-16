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
  const discovered = Array(9).fill(false);
    dfs(graph, 1, discovered);
  };
  const dfs = (graph, vertext, discovered) => {
    discovered[vertext] = true;

    for (const next of graph[vertext]) {
      if (!discovered[next]) {
        dfs(graph, next, discovered);
      }
    }
};
solution();
