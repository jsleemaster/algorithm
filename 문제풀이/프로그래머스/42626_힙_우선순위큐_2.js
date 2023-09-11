class priorityQueue {
  constructor() {
    this.heap = [];
  }
  size() {
    return this.heap.length;
  }
  swap(idx1, idx2) {
    [this.heap[idx1], this.heap[idx2]] = [this.heap[idx2], this.heap[idx1]];
    return this.heap;
  }

  getParentIdx(childIdx) {
    return Math.floor((childIdx - 1) / 2);
  }

  getLeftChildIdx(parentIdx) {
    return parentIdx * 2 + 1;
  }

  getRightChildIdx(parentIdx) {
    return parentIdx * 2 + 2;
  }
  pop() {
    const heapSize = this.size();
    if (!heapSize) return null;
    if (heapSize === 1) return this.heap.pop();

    const value = this.heap[0];
    this.heap[0] = this.heap.pop();
    this.bubbledown();
    return value;
  }

  push(value) {
    this.heap.push(value);
    this.bubbleup();

    return this.heap;
  }
  check(leftChild, parent, rightChild) {
    return leftChild <= this.size() - 1 && this.heap[leftChild] < this.heap[parent] || (rightChild <= this.size() - 1 && this.heap[rightChild] < this.heap[parent])
  }
  bubbleup() {
    let child = this.size() - 1;
    let parent = this.getParentIdx(child);

    while (this.heap[child] < this.heap[parent]) {
      this.swap(child, parent);
      child = parent;
      parent = this.getParentIdx(parent);
    }
  }
  bubbledown() {
    let parent = 0;
    let leftChild = this.getLeftChildIdx(parent);
    let rightChild = this.getRightChildIdx(parent);

    while (this.check(leftChild, parent, rightChild)) {
      if (rightChild <= this.size() - 1 && this.heap[leftChild] > this.heap[rightChild]) {
        this.swap(parent, rightChild);
        parent = rightChild;
      } else {
        this.swap(parent, leftChild);
        parent = leftChild;
      }
      leftChild = this.getLeftChildIdx(parent);
      rightChild = this.getRightChildIdx(parent);
    }
  }
}

function solution(scoville, K) {
  let count = 0;
  const pq = new priorityQueue();
  scoville.forEach(el => pq.push(el));

  while (pq.heap[0] < K && pq.size() > 1) {
    count++;
    pq.push(pq.pop() + pq.pop() * 2);
  }
  return pq.heap[0] >= K ? count : -1;
}
