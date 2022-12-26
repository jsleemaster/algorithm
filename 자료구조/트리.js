//최대 2개의 노드만 가짐
//부모 노드의 왼쪽은 항상 부모노드보다 작은수
//부모 노드의 오른쪽은 항상 부모노드보다 큰 수
class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

//Binary Search Tree - 이진 탐색트리
class BST {
  constructor() {
    this.root = null;
  }
  insert(value) {
    let newNode = new Node(value)
    if (this.root === null) {
      this.root = newNode;
      return this;
    } else {
      let current = this.root; //루트 값
      while (true) {
        if (value < current.value) { // 값이 작기 때문에 왼쪽노드에 위치하도록
          if (current.left === null) { // 왼쪽 값이 없을 경우
            current.left = newNode;
            return this;
          } else {
            current = current.left;
          }
        } else if (value > current.value) {
          if (current.right === null) {
            current.right = newNode;
            return this;
          } else {
            current = current.right;
          }
        }

      }

    }
  }
  find(value) { //값 찾기
    if (this.root === null) return false;
    let current = this.root;
    let found = false;
    while (current && !found) {
      if (value < current.value) {
        current = current.left
      } else if (value > current.value) {
        current = current.right
      } else {
        found = true;
      }
    }
    if (!found) return undefined;
    return current;
  }
  contains(value) { //값 찾기 true/ false
    if (this.root === null) return false;
    let current = this.root;
    while (current) {
      if (value < current.value) {
        current = current.left
      } else if (value > current.value) {
        current = current.right
      } else {
        return true;
      }
    }
    return false;
  }
  /** 트리순회 - 정렬이 되어있지 않았을때 순회하는 방법
    * 순회방식 (재귀 이용)
    * - 너비 우선 : 가로(수평)
    * - 깊이 우선 : 세로(수직)
    * 깊이 우선 3가지 방식
    * 1.정위 순회 : 아래 깊이를 훑으며 내려갔다 올라갔다 반복
    * 2.전위 순회 : 위에서 시작
    * 3.후위 순회 : 아래 너비를 훑으며 올라옴
  **/
  // 너비 우선 탐색
  BFS() {
    let node = this.root;
    let data = [];
    let queue = [];

    queue.push(node);
    while (queue.length) {
      node = queue.shift();
      data.push(node.value);
      if (node.left) queue.push(node.left)
      if (node.right) queue.push(node.right)
    }
    return data
  }
}