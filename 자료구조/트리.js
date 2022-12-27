/**
 * 트리
 * 최대 2개의 노드만 가짐
 * 부모 노드의 왼쪽은 항상 부모노드보다 작은 수
 * 부모 노드의 오른쪽은 항상 부모노드보다 큰 수
 * 비선형 데이터 구조
 * 루트 하나와 많은 자식 노드로 구성
 */

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
    * 
    * 깊이 우선 3가지 방식
    * 1.정위 순회 : 최하단 아래 노드로 시작하여 깊이-너비를 오름차순으로 순회하며 탐색 , 정렬이된 트리라면 정렬된 상태로 출력
    * 2.전위 순회 : 루트부터 시작하여 노드를 순회, 왼쪽이 끝나면 오른쪽 순회
    * 3.후위 순회 : 최하단 아래 노드를 순회하며 마지막이 루트, 왼쪽이 끝나면 오른쪽 순회
    * 
    * 같은 순회인데 어떨 때 마다 사용하는가?
    * 1. 너비가 넓을 수록 깊이 우선 탐색을 이용
       -> 깊이 우선탐색 3가지는 어떤걸 이용하나 크게 차이는 없으나 차이점은
       1-1. 정위 순회 : 리스트를 받아서 데이터베이스에 넣는 작업 (정렬된 상태) , 단점: 정렬되어있지않으면 이상해질 수 있음
       1-2. 전위 순회 : 파일이나 데이터베이스를 연쇄구조로 다시 만들어낼때(export) ->  넣은 순서대로 나오기 때문
       1-3. 후위 순회 : 자식노드를 삭제할 때 
    * 2. 깊이가 깊을 수록 넓이 우선 탐색을 이용
  **/

  //예제
  //         10
  //     6      15
  //   3   8       20

  /**
   * 너비 우선 탐색
   * @returns [10,6,15,3,8,20]
   */
  BFS() { //breadth frist search
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
  // 
  /**
   * 깊이 우선 탐색 - 전위 순회
   * @returns [10,6,3,8,15,20]
   */
  DFSPreOrder() {
    let data = [];
    //순서가 중요!
    function traveres(node) {
      data.push(node.value);
      // 왼쪽을 다 순회 한후 오른쪽을 순회한다
      if (node.left) traveres(node.left);
      if (node.right) traveres(node.right);
    }
    traveres(this.root);
    return data
  }
  /**
   * 깊이 우선 탐색 - 후위 순회
   * @returns [3,8,6,20,15,10]
   */
  DFSPostOrder() {
    let data = [];
    function traveres(node) {
      if (node.left) traveres(node.left)
      if (node.right) traveres(node.right)
      data.push(node.value)
    }
    traveres(this.root);
    return data;
  }
  /**
   * 깊이 우선 탐색 - 정위 순회
   * @returns [3,6,8,10,15,20]
   */
  DFSInOrder() {
    let data = [];
    function traveres(node) {
      if (node.left) traveres(node.left)
      data.push(node.value)
      if (node.right) traveres(node.right)
    }
    traveres(this.root);
    return data;
  }
}