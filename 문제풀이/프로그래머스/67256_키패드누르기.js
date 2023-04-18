function solution(numbers, hand) {
  let answer = [];
  //시작 위치
  const numberPosition = {
    '1': [0, 0],
    '2': [0, 1],
    '3': [0, 2],
    '4': [1, 0],
    '5': [1, 1],
    '6': [1, 2],
    '7': [2, 0],
    '8': [2, 1],
    '9': [2, 2],
    '*': [3, 0],
    '0': [3, 1],
    '#': [3, 2],
  }

  let leftPosition = [3, 0];
  let rightPosition = [3, 2];

  const positionChange = (x, y, type) => {
    answer.push(type);
    if (type === "L") {
      leftPosition = [x, y];
    } else {
      rightPosition = [x, y];
    }
    return;
  }

  for (let i = 0; i < numbers.length; i++) {
    const number = numbers[i]
    const [x, y] = numberPosition[number];
    if (number === 1 || number === 4 || number === 7) {
      positionChange(x, y, "L")
      continue;
    }
    if (number === 3 || number === 6 || number === 9) {
      positionChange(x, y, "R")
      continue;
    }

    let [lx, ly] = leftPosition;
    let [rx, ry] = rightPosition;

    let leftCount = 0;
    let rightCount = 0;
    while (rx !== x || ry !== y) {
      if (rx > x) {
        rx--;
        rightCount++;
      }
      if (rx < x) {
        rx++;
        rightCount++;
      }
      if (ry > y) {
        ry--
        rightCount++
      }
      if (ry < y) {
        ry++;
        rightCount++
      }
    }
    while (lx !== x || ly !== y) {
      if (lx > x) {
        lx--;
        leftCount++;
      }
      if (lx < x) {
        lx++;
        leftCount++;
      }
      if (ly > y) {
        ly--
        leftCount++
      }
      if (ly < y) {
        ly++;
        leftCount++
      }
    }


    if (leftCount < rightCount) {
      positionChange(x, y, "L")
      continue;
    }
    if (leftCount > rightCount) {
      positionChange(x, y, "R")
      continue;
    }
    if (leftCount === rightCount) {
      positionChange(x, y, hand === 'right' ? "R" : "L")
    }
  }
  return answer.join('');
}


console.log(solution([1, 3, 4, 5, 8, 2, 1, 4, 5, 9, 5], "right")) // "LRLLLRLLRRL"