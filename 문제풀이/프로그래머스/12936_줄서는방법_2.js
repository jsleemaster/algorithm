
// k번째를 이용해서 n!에서 k번째에 해당하는 숫자를 하나씩 찾아서 만들어준다. 
// 1. arr = [1, 2, 3], n = 3, k = 5 
// n = 3일 경우 3! = 6가지 경우의 수가 나오는데 (n - 1)! = 2개씩 앞자리 숫자가 변한다. 
// k = 1, 2는 [1, x, y], k = 3, 4는 [2, x, y], k = 5, 6은 [3, x, y]
// k = 5 이므로 3을 고정하고 k = 5, 6중에 첫번째 이므로 k = 1로 갱신.
// k = 1, result = [3]

// 2. arr = [1, 2], n = 2, k = 1
// 3을 제외하고 2! = 2가지 경우의 수에서 1!개씩 앞자리가 변한다
// k = 1은 [3, 1, x], k = 2는 [3, 2, x]
// k = 1 이므로 1을 고정하고 k = 1중에 첫번째 이므로 k = 1로 갱신.
// (원소가 1개 남은 상황이라 루프 종료하고 그냥 뒤에 붙여도 됩니다)
// k = 1, result = [3, 1]

// 3. arr = [2], n = 1, k = 1 => result = [3, 1, 2] 
// 위와 같이 반복

const solution = (n, k) => {
  const result = []; // 결과값
  const arr = new Array(n).fill(1).map((_, i) => _ + i); // n = 3, arr = [1, 2, 3]

  function getNum(arr) { // k에 해당하는 순열의 원소를 하나씩 구하기 위한 함수.
    let fac = 1;
    for (let i = 1; i < arr.length; i++) {
      fac *= i;
    }
    // fac => (n - 1)!, fac개씩 앞자리 숫자가 변함.

    const idx = Math.ceil(k / fac) - 1;
    // k = 1, 2 => idx = 0, k = 3, 4 => idx = 1, k = 5, 6 => idx = 2
    // ex) n = 3, k = 5, idx = Math.ceil(5 / 2) - 1 = 3 - 1 = 2

    k = k - idx * fac;
    // idx를 구한 뒤 다음 루프 연산을 위해 k값을 갱신.
    // ex) k = 5, idx = 2, k = 5 - (2 * 2!) = 1  

    return arr[idx];
    // 배열 idx에 해당하는 원소를 return.
  }

  for (let i = 1; i <= n; i++) { // loop문 한번에 하나씩 원소를 넣으므로 총 n번 반복.
    const num = getNum(arr); // n개의 숫자 배열에서 연산을 통해 원소 하나씩 구함.
    arr.splice(arr.indexOf(num), 1); // 꺼낸 숫자를 원래 배열에서 제거.
    result.push(num); // 결과값 배열에 꺼낸 숫자를 push.
  }

  return result;
};

//오답
// function solution(n, k) {
//   const visited = Array(n).fill(false)
//   let count = 0;
//   let answer = null
//   let check = false;
//   const pemutaion = (n, permuted, visited) => {
//     if (permuted.length === n) {
//       if (count === k - 1) {
//         answer = [...permuted]
//         check = true;
//         return;
//       } else {
//         count++;
//       }
//     }
//     for (let i = 1; i <= n; i++) {
//       if (check) break;
//       if (!visited[i]) {
//         visited[i] = true;
//         permuted.push(i);
//         pemutaion(n, permuted, visited);
//         if (check) {
//           break;
//         }
//         visited[i] = false;
//         permuted.pop();
//       }
//     }
//   }
//   pemutaion(n, [], visited)

//   return answer
// }

console.log(solution(3, 5)) //[3,1,2]