/**
 * 1. 새 노드를 방문할 때마다 알려진 거리가 가장 작은 노드를 먼저 선택합니다.
 * 2. 방문할 노드로 이동한 후에는 각 노드의 인접 노드를 살펴봅니다
 * 3. 각 인접 노드에 대해 시작 노드에서 확인 중인 노드로 이어지는 총 에지를 합산하여 거리를 계산합니다.
 * 4. 노드에 대한 새로운 총 거리가 이전 총 거리보다 작으면 해당 노드에 대한 새로운 짧은 거리를 저장합니다.
 * 
 * 기본 거리는 Infinity 값으로 정한다.
 */

//우선순위 큐 - 기초적인
class PriorityQueue {
  constructor() {
    this.values = [];
  }
  enqueue(val, priority) {
    this.values.push({ val, priority });
    this.sort();
  }
  dequeue() {
    return this.values.shift();
  }
  sort() {
    this.values.sort((a, b) => a.priority > b.priority);
  }
}

//가중 그래프
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
  Dijkstra(start, finish) {
    const nodes = new PriorityQueue();
    const distances = {};
    const previous = {};

    let path = [] //to return at end
    let smallest;

    //1. 기본 설정
    for (let vertex in this.adjacencyList) {
      if (vertex === start) {
        distances[vertex] = 0;
        nodes.enqueue(vertex, 0);
      } else {
        distances[vertex] = Infinity;
        nodes.enqueue(vertex, Infinity);
      }
      previous[vertex] = null;
    }
    //2. 방문할 것이 남아 있는 지 체크
    while (nodes.values.length) {
      smallest = nodes.dequeue().val;
      if (smallest === finish) {
        //WE ARE DONE
        //BUILD UP PATH TO RETURN AT END
        while (previous[smallest]) {
          path.push(smallest);
          smallest = previous[smallest];
        }
        break;
      }
      if (smallest || distances[smallest] !== Infinity) {
        for (let neighbor in this.adjacencyList[smallest]) {
          //find neighboring node
          let nextNode = this.adjacencyList[smallest][neighbor];
          //calculate new distance to neighboring node
          let candidate = distances[smallest] + nextNode.weight;
          let nextNeighbor = nextNode.node;
          if (candidate < distances[nextNeighbor]) {
            //updating new smallest distance to neighbor
            distances[nextNeighbor] = candidate;
            //updating previous - How we got to neighbor
            previous[nextNeighbor] = smallest;
            //enqueue in priority queue with new priority
            nodes.enqueue(nextNeighbor, candidate);
          }
        }
      }
    }
    return path.concat(smallest).reverse();
  }
}

//실행
let graph = new WeightedGraph()
graph.addVertex("A");
graph.addVertex("B");
graph.addVertex("C");
graph.addVertex("D");
graph.addVertex("E");
graph.addVertex("F");

graph.addEdge("A", "B", 4);
graph.addEdge("A", "C", 2);
graph.addEdge("B", "E", 3);
graph.addEdge("C", "D", 2);
graph.addEdge("C", "F", 4);
graph.addEdge("D", "E", 3);
graph.addEdge("D", "F", 1);
graph.addEdge("E", "F", 1);

graph.Dijkstra("A", "E");

// ["A", "C", "D", "F", "E"]


