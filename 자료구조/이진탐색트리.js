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

//Binary Search Tree
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
}