function solution(park, routes) {

  let sx, sy, east, south, north, west
  const row = park.length;
  const col = park[0].length;

  for (let x = 0; x < park.length; x++) {
    for (let y = 0; y < park[0].length; y++) {
      if (park[x][y] === "S") {
        sx = x
        sy = y
      }
    }
  }
  let ox = sx;
  let oy = sy;
  let check = true;
  for (let i = 0; i < routes.length; i++) {
    if (!check) {
      sx = ox;
      sy = oy
    } else {
      ox = sx;
      oy = sy;
    }
    const route = routes[i][0];
    const count = routes[i][2];
    check = true;
    let nx = sx, ny = sy, dir = null, type = null

    if (route === "E") {
      dir = "Y"
      type = "count"
    } else if (route === "W") {
      dir = "Y"
      type = "discount"
    } else if (route === "S") {
      dir = "X"
      type = "count"
    } else if (route === "N") {
      dir = "X"
      type = "discount"
    }
    for (let j = 0; j < count; j++) {
      if (dir === "X") {
        if (type === "count") {
          nx += 1
        } else {
          nx += -1
        }
        if (nx < 0 || nx >= row) {
          check = false;
        }
      } else if (dir === "Y") {
        if (type === "count") {
          ny += 1
        } else {
          ny += -1
        }
        if (ny < 0 || ny >= col) {
          check = false;
        }
      }


      if (check) {
        if (park[nx][ny] && park[nx][ny] === "X") {
          check = false;
        }
        sx = nx
        sy = ny
      }
    }
  }
  if (!check) return [ox, oy]
  return [sx, sy]
}
// solution(["SOO", "OOO", "OOO"], ["E 2", "S 2", "W 1"]); //[2,1]
// solution(["SOO", "OXX", "OOO"], ["E 2", "S 2", "W 1"]); // [0,1]
// solution(["OSO", "OOO", "OXO", "OOO"], ["E 2", "S 3", "W 1"]); // [0,0]

// solution(["SOO", "OOO", "OOO"], ["E 2", "S 2", "W 1"]) // [2,1]
// solution(["SOO", "OXX", "OOO"], ["E 2", "S 2", "W 1"]) // [0,1]
// solution(["OSO", "OOO", "OXO", "OOO"], ["E 2", "S 3", "W 1"]) // [0,0]

// solution(["OSO", "OOO", "OOO", "OOO"], ["W 2"]) // [0,1]
// solution(["OSO", "OOO", "OOO", "OOO"], ["N 2"]) // [0,1]
// console.log(solution(["OSO", "OOO", "OOO", "OOO"], ["S 5"])) // [0,1]
// solution(["OSO", "OOO", "OOO", "OOO"], ["E 5"]) // [0,1]

// solution(["XXX", "XSX", "XXX"], ["E 1"]) // [1,1]
// solution(["XXX", "XSX", "XXX"], ["W 1"]) // [1,1]
// solution(["XXX", "XSX", "XXX"], ["S 1"]) // [1,1]
// solution(["XXX", "XSX", "XXX"], ["N 1"]) // [1,1]

// solution(["SOXOO", "OOOOO", "OOOOO", "OOOOO", "OOOOO"], ["E 3"]) // [0, 0]
// solution(["SOOOX", "OOOOO", "OOOOO", "OOOOO", "OOOOO"], ["E 3"]) // [0, 3]
// solution(["XOOOS", "OOOOO", "OOOOO", "OOOOO", "OOOOO"], ["W 3"]) // [0, 1]
// solution(["OOXOS", "OOOOO", "OOOOO", "OOOOO", "OOOOO"], ["W 3"]) // [0, 4]
// solution(["SOOOO", "OOOOO", "XOOOO", "OOOOO", "OOOOO"], ["S 3"]) // [0, 0]
// solution(["SOOOO", "OOOOO", "OOOOO", "OOOOO", "XOOOO"], ["S 3"]) // [3, 0]
// solution(["OOOOO", "OOOOO", "XOOOO", "OOOOO", "SOOOO"], ["N 3"]) // [4, 0]
// solution(["XOOOO", "OOOOO", "OOOOO", "OOOOO", "SOOOO"], ["N 3"]) // [1, 0]