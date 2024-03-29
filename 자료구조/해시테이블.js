
// 직선 탐색법과 개별체이닝이 있지만 이 연습 강의는 개별체이닝을 사용했다.
// 개별 체이닝 사용
class Hash {
  constructor(size = 53) { // 소수 값을 위한 53
    this.keyMap = new Array(size);
  }
  _hash(key) {
    let total = 0;
    let WERID_PRIME = 31; //소수를 위한 31
    for (let i = 0; i < Math.min(length, 100); i++) {
      let char = key[i]
      let value = char.charCodeAt(0) - 96;
      total += (total * WERID_PRIME + value) % this.keyMap.length;
    }
    return total;
  }
  set(key, value) {
    let index = this._hash(key);
    if (!this.keyMap[index]) {
      this.keyMap[index] = [];
    }
    this.keyMap[index].push([key, value]);
  }
  get(key) {
    let index = this._hash(key);
    if (this.keyMap[index]) {
      for (let i = 0; i < this.keyMap[index].length; i++) {
        if (this.keyMap[index][i][0] === key) {
          return this.keyMap[index][i][1];
        }
      }
    }
    return undefined;
  }
  values() {
    let valueArr = []
    for (let i = 0; i < this.keyMap.length; i++) {
      if (this.keyMap[i]) {
        for (let j = 0; j < this.keyMap[i].length; j++) {
          if (!valueArr.includes(this.keyMap[i][j][1])) {
            valueArr.push(this.keyMap[i][j][1]);
          }
        }
      }
    }
    return valueArr;
  }
  keys() {
    let keyArr = []
    for (let i = 0; i < this.keyMap.length; i++) {
      if (this.keyMap[i]) {
        for (let j = 0; j < this.keyMap[i].length; j++) {
          if (!keyArr.includes(this.keyMap[i][j][0])) {
            keyArr.push(this.keyMap[i][j][0]);
          }
        }
      }
    }
    return keyArr;
  }
}