class Node {
  constructor(val, priority) {
    this.val = val;
    this.priority = priority;
  }
}

// 최소이진힙 사용 
class PriotyQueue {
  constructor() {
    this.value = []
  }
  enqueue(val, priority) {
    let Node = new Node(val, priority);
    this.value.push(Node);
    this.bubbleUp();
  }
  bubbleUp() {
    let idx = this.value.length - 1;
    const element = this.value[idx];
    while (idx > 0) {
      let parentIdx = Math.floor((idx - 1) / 2);
      let parent = this.value[parentIdx];
      if (element.priority >= parent.priority) break;
      this.value[parentIdx] = element
      this.value[idx] = parent;
      idx = parentIdx;
    }
  }
  dequeue() { // 삭제
    const min = this.values[0];
    const end = this.values.pop();
    if (this.values.length > 0) {
      this.values[0] = end;
      this.sinkDown();
    }
    return min;
  }
  sinkDown() {
    let idx = 0;
    const length = this.values.length;
    const element = this.values[idx];

    while (true) {
      let leftChildIdx = 2 * idx + 1;
      let rightChildIdx = 2 * idx + 2;
      let swap = null;
      let leftChild, rightChild;

      if (leftChildIdx < length) {
        leftChild = this.values[leftChildIdx];
        if (leftChild.priority < element.priority) {
          swap = leftChildIdx;
        }
      }

      if (rightChildIdx < length) {
        rightChild = this.values[rightChildIdx];
        if (
          (swap === null && rightChild.priority < element.priority) ||
          (swap !== null && rightChild.priority < leftChild.priority)
        ) {
          swap = rightChildIdx;
        }
      }
      if (swap === null) break;

      this.values[idx] = this.values[swap]; //자리 바꾸기
      this.values[swap] = element;
      idx = swap;
    }

  }
}