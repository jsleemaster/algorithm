function solution(n, lost, reserve) {
  const user = {}
  for (let i = 1; i <= n; i++) {
    user[i] = { visited: false, lost: false, value: 1, number: i };
  }
  lost.sort((a, b) => a - b)

  for (let i = 0; i < lost.length; i++) {
    user[lost[i]] = Object.assign(user[lost[i]], { lost: true, value: user[lost[i]].value - 1 });
  }
  reserve.sort((a, b) => a - b)
  for (let i = 0; i < reserve.length; i++) {
    let userNumber = reserve[i];
    if (userNumber === user[reserve[i]].number && user[reserve[i]].lost && !user[userNumber].double) {
      user[reserve[i]] = Object.assign(user[reserve[i]], { visited: true, value: user[userNumber].value + 1, double: true, });
      continue;
    }
    if (!user[reserve[i]].lost) {
      let prev = user[userNumber - 1];
      let next = user[userNumber + 1];

      if (prev && prev.lost && !prev.visited) {
        user[userNumber - 1] = Object.assign(prev, {
          visited: true, value: prev.value + 1,
          double: true,
        });
      } else if (next && next.lost && !next.visited) {
        user[userNumber + 1] = Object.assign(next, {
          visited: true, value: next.value + 1,
          double: true,
        });
      }
      if (prev && prev.lost && prev.visited && prev.double) {
        // user[userNumber - 1] = Object.assign(prev, { visited: true, value: prev.value - 1 });
        continue;
      } else if (next && next.lost && next.visited && next.double) {
        // user[userNumber + 1] = Object.assign(next, { visited: true, value: next.value - 1 });
        continue;
      }

    }
  }
  let answer = 0;
  Object.values(user).forEach((obj) => answer += obj.value);
  return answer;
}
console.log(solution(5, [2, 4], [1, 3, 5])); // 5
console.log(solution(3, [3], [1])); // 2
console.log(solution(3, [3], [3])); // 3
console.log(solution(3, [1], [1, 2, 3])); // 3
console.log(solution(5, [3, 5], [2, 4])); // 5

console.log(
  solution(13,
    [1, 2, 5, 6, 10, 12, 13],
    [2, 3, 4, 5, 7, 8, 9, 10, 11, 12])); // 11
