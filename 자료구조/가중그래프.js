/**
 * 가중 그래프
 */

class weightGraph {
  constructor(graph) {
    this.adjacencyList = {};
  }
  addVertext(vertex) {
    if (!this.adjacencyList[vertex]) this.adjacencyList[vertex] = [];
  }
  addEdge(vertex1, vertex2, weight) {
    this.adjacencyList[vertex1].push([{ node: vertex2, weight }]);
    this.adjacencyList[vertex2].push([{ node: vertex1, weight }]);
  }
}