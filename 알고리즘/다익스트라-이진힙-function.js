const adjacencyList = {};
//우선순위큐
const priorityQueue = [];

const Dijkstra = (start, finish) => {
  const distances = {};
  const previous = {};
  let path = [] //to return at end
  let smallest;
  //build up initial state
  for (let vertex in adjacencyList) {
    if (vertex === start) {
      distances[vertex] = 0;
      enqueue(vertex, 0);
    } else {
      distances[vertex] = Infinity;
      enqueue(vertex, Infinity);
    }
    previous[vertex] = null;
  }
  // as long as there is something to visit
  while (priorityQueue.length) {
    smallest = dequeue().val;
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
      for (let neighbor in adjacencyList[smallest]) {
        //find neighboring node
        let nextNode = adjacencyList[smallest][neighbor];
        //calculate new distance to neighboring node
        let candidate = distances[smallest] + nextNode.weight;
        let nextNeighbor = nextNode.node;
        if (candidate < distances[nextNeighbor]) {
          //updating new smallest distance to neighbor
          distances[nextNeighbor] = candidate;
          //updating previous - How we got to neighbor
          previous[nextNeighbor] = smallest;
          //enqueue in priority queue with new priority
          enqueue(nextNeighbor, candidate);
        }
      }
    }
  }
  return path.concat(smallest).reverse();
}
const enqueue = (val, priority) => {
  let newNode = { val, priority };
  priorityQueue.push(newNode);
  bubbleUp();
}

const dequeue = () => {
  const min = priorityQueue[0];
  const end = priorityQueue.pop();
  if (priorityQueue.length > 0) {
    priorityQueue[0] = end;
    sinkDown();
  }
  return min;
}
const bubbleUp = () => {
  let idx = priorityQueue.length - 1;
  const el = priorityQueue[idx];
  while (idx > 0) {
    let parentIdx = Math.floor((idx - 1) / 2);
    let parent = priorityQueue[parentIdx];
    if (el.priority >= parent.priority) break;
    priorityQueue[parentIdx] = el;
    priorityQueue[idx] = parent;
    idx = parentIdx;
  }
}

const sinkDown = () => {
  let idx = 0;
  const length = priorityQueue.length;
  const element = priorityQueue[0];
  while (true) {
    let leftChildIdx = 2 * idx + 1;
    let rightChildIdx = 2 * idx + 2;
    let leftChild, rightChild;
    let swap = null;

    if (leftChildIdx < length) {
      leftChild = priorityQueue[leftChildIdx];
      if (leftChild.priority < element.priority) {
        swap = leftChildIdx;
      }
    }
    if (rightChildIdx < length) {
      rightChild = priorityQueue[rightChildIdx];
      if (
        (swap === null && rightChild.priority < element.priority) ||
        (swap !== null && rightChild.priority < leftChild.priority)
      ) {
        swap = rightChildIdx;
      }
    }
    if (swap === null) break;
    priorityQueue[idx] = priorityQueue[swap];
    priorityQueue[swap] = element;
    idx = swap;
  }
}
const addVertex = (vertex) => {
  if (!adjacencyList[vertex]) adjacencyList[vertex] = [];
}
const addEdge = (vertex1, vertex2, weight) => {
  adjacencyList[vertex1].push({ node: vertex2, weight });
  adjacencyList[vertex2].push({ node: vertex1, weight });
}

addVertex("A");
addVertex("B");
addVertex("C");
addVertex("D");
addVertex("E");
addVertex("F");

addEdge("A", "B", 4);
addEdge("A", "C", 2);
addEdge("B", "E", 3);
addEdge("C", "D", 2);
addEdge("C", "F", 4);
addEdge("D", "E", 3);
addEdge("D", "F", 1);
addEdge("E", "F", 1);

console.log(Dijkstra("A", "E"));



