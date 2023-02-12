//Vertex - 정점
//Edge - 간선

/**
 * 방향그래프
 * 한쪽에만 연결이 될 수도있고 양방향으로 연결이 될수도 있음
 */
/**
 * 무방향 그래프
 * 양방향으로 연결되어 있음
 */

/**
 * 가중그래프
 * 간선에 값이 부여된 경우
 */

/**
 * 비가중 그래프
 * 간선에 값이 부여되지 않은 경우
 */

//그래프 정렬 방법 - 인접 행렬 (공간이 넓음, 특정 간선을 확인할때 효율적), *인접 리스트(공간이 적음, 모든 간선을 순회하는 것은 빠름 더 중요 -실제로 많이 이용됨 )
//정렬 : 정점과 간선과의 관계를 구하는 법

//무방향 그래프
class Graph {
  constructor() {
    this.adjacenyList = {};
  }
  addVertex(vertex) {
    if (!this.adjacenyList[vertex]) this.adjacenyList[vertex] = [];
  }
  addEdge(vertex1, vertex2) {
    this.adjacenyList[vertex1].push(vertex2)
    this.adjacenyList[vertex2].push(vertex1)
  }
  removeEdge(vertex1, vertex2) {
    this.adjacenyList[vertex1] = this.adjacenyList[vertex1].filter((v) => v !== vertex2)
    this.adjacenyList[vertex2] = this.adjacenyList[vertex2].filter((v) => v !== vertex1)
  }
  removeVertex(vertex) {
    while (this.adjacenyList[vertex].length) {
      const adjacencyVertex = this.adjacenyList[vertex].pop();
      this.removeEdge(vertex, adjacencyVertex)
    }
    delete this.adjacenyList[vertex]

  }
  // DFS 깊이 탐색 그래프 재귀용법
  depthFirstRecursive(start) {
    const result = []
    const visited = {};
    const adjacenyList = this.adjacenyList;
    // 시작 지점에서 시작
    (function dfs(vertex) {
      if (!vertex) return null;
      visited[vertex] = true;
      result.push(vertex);

      adjacenyList[vertex].forEach(neighbor => {
        if (!visited[neighbor]) {
          return dfs(neighbor);
        }
      })
    })(start)

    return result;
  }
  //DFS 그래프 반복용법
  depthFirstIterative(start) {
    const stack = [start];
    const result = [];
    const visited = {};
    let currentVertex;

    visited[start] = true;

    while (stack.length) {
      currentVertex = stack.pop();
      result.push(currentVertex);

      this.adjacenyList[currentVertex].forEach(neighbor => {
        if (!visited[neighbor]) {
          visited[neighbor] = true;
          stack.push(neighbor);
        }
      })
    }
    return result;
  }
  // BFS 넓이 탐색 그래프  
  breadthFirst(start) {
    const queue = [start];
    const result = [];
    const visited = {};
    let currentVertex;
    visited[start] = true;

    while (queue.length) {
      currentVertex = queue.shift();
      result.push(currentVertex);
      //  A
      // / \
      // B   C
      // |   |
      // E - F
      //  \ /
      //   G

      // 아래는 A,C,B,F,E,G
      // this.adjacenyList[currentVertex].slice().reverse().forEach(neighbor => {
      // 아래는 A,B,C,E,F,G
      this.adjacenyList[currentVertex].forEach(neighbor => {
        if (!visited[neighbor]) {
          visited[neighbor] = true;
          queue.push(neighbor);
        }
      })
    }
    return result;
  }
}