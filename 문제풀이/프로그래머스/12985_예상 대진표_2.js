function solution(n, a, b) {
  let answer = 0;
  if (a > b) {
    let i = b;
    b = a;
    a = i;
  }

  while (a % 2 === 0 || b - a !== 1) {
    answer += 1;
    if (a % 2 !== 0) {
      a += 1;
    }
    if (b % 2 !== 0) {
      b += 1;
    }
    a /= 2;
    b /= 2;
  }
  return answer + 1;
}
// function solution(n, a, b) {
//   let round = 1;
//   const fight = Array(n).fill(1).map((value, i) => value + i);
//   if (a > b) {
//     let i = b;
//     b = a;
//     a = i;
//   }
//   const recursive = (fight) => {
//     const refight = []
//     let finalCheck = false;
//     while (fight.length) {
//       const left = fight.shift();
//       const right = fight.shift();

//       if ((left === a || left === b) && (right === b || right === a)) {
//         finalCheck = true;
//         break;
//       }
//       let check = true;
//       if (left === a || left === b) {
//         refight.push(left)
//         check = false;
//       }
//       if (right === b || right === a) {
//         refight.push(right)
//         check = false;
//       }
//       if (check) {
//         if (left > right) {
//           refight.push(left);
//         } else {
//           refight.push(right);
//         }
//       }
//     }
//     if (finalCheck) {
//       return;
//     }
//     round++;
//     recursive(refight)
//   }

//   recursive(fight);
//   return round;
// }

// console.log(solution(8, 4, 7)) // 3
console.log(solution(15, 5, 9)) // 3
// testCase 1
// 12 34 56 78 (4,7) [2,4]
// 14 57 (2,4) [1,2]
// 4 7 end

// testCase 
// 1,2 3,4 5,6 7,8 9,10 11,12 13,14 15,16 (15,16) [8,8] end
// 23 57 911 1315 (3,5) [2,3]
// 2,5 9,15 (2,3) [1,2]
// 5,9 end

// 1,2 3,4 5,6 7,8 9,10 11,12 13,14 15,16 (11,15) [6,8]
// 2,3 5,7 9,11 13,15 (6,8) [3,4]
// 25 1115 end