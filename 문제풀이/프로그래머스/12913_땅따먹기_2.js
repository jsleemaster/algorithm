// 오답
// function solution(land) { 
//   let answer = 0
//   const visited = Array(land[0].length).fill(false);
//   for (let i = 0; i < land.length; i++) {
//     let max = 0;
//     let idx = 0;
//     for (let j = 0; j < land[i].length; j++) {
//       const y = land[i][j];
//       if (visited[j] === true) continue;
//       if (max <= y) {
//         max = y;
//         idx = j
//       }
//     }
//     visited[idx] = true;
//     answer += land[i][idx]
//   }
//   return answer
// }
function solution(land) {

  const max = (a, b, c) => {
    return Math.max(Math.max(a, b), c)
  }

  for (let i = 1; i < land.length; i++) {
    land[i][0] += max(land[i - 1][1], land[i - 1][2], land[i - 1][3])
    land[i][1] += max(land[i - 1][0], land[i - 1][2], land[i - 1][3])
    land[i][2] += max(land[i - 1][1], land[i - 1][3], land[i - 1][0])
    land[i][3] += max(land[i - 1][1], land[i - 1][2], land[i - 1][0])
  }
  let answer = 0;
  land[land.length - 1].forEach((value) => answer = Math.max(answer, value))
  return answer;
}
// 같은 열 안됨
console.log(solution([[1, 2, 3, 5], [5, 6, 7, 8], [4, 3, 2, 1]])) //16