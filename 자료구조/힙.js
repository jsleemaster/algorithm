//최댓 값이나 최솟 값을 빠르게 찾는 자료구조
//부모 노드의 값이 자식 노드보다 값이 항상 큼

//자식 노드를 찾는 공식
// 왼쪽은 인덱스(n)에 2n+1 하면 자식의 인덱스가 나옴
// 오른쪽은 인덱스(n)에 2n+2 하면 자식의 인덱스가 나옴

class MaxBinaryHeap {
  constructor() {
    this.values = []
  }
  insert(element) {
    this.values.push(element);
    this.bubbleup()
  }
  //insert 값이 부모 노드보다 크면 변경
  bubbleup() {
    let idx = this.values.length - 1;
    const element = this.values[idx];

    while (idx > 0) {
      let parentIdx = Math.floor((idx - 1) / 2) //부모 노드 인덱스 값 찾기
      let parent = this.values[parentIdx];
      if (element <= parent) break;
      //스왑
      this.values[parentIdx] = element;
      this.values[idx] = parent;
      idx = parentIdx;

    }
  }
}