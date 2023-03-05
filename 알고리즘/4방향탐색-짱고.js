const direction = [
  //dx, dy
  [0, 1], // 오른쪽
  [1, 0], // 아래
  [0, -1], // 왼쪽
  [-1, 0] // 위
]

//좌표 범위를 확인하는 함수
const check = (nextX, nextY) => {
  return 0 <= nextX && nextY < arr.length
    && 0 <= nextY && nextY < arr[0].length;
}

for (let x = 0; x < arr.length; x++) {
  for (let y = 0; y < arr[0].length; y++) {
    let sum = 0;
    for (const [dx, dy] of direction) {
      const nx = x + dx;
      const ny = y + dy;

      if (check(nx, ny)) {
        sum += arr[nx][ny];
      }
    }
  }
}