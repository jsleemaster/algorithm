const fs = require("fs");
let input = fs.readFileSync("./11659.txt").toString().split("\n");
let numbers = [];

for (let i = 0; i < input.length; i++) {
  if (input[i] !== '') {
    numbers.push(input[i].split(' '));
  }
}
const solution = (countArray, ani, anj) => {
  const dp = Array(countArray.length).fill(0);
  dp[0] = 0;
  for (let i = 0; i < countArray.length; i++) {
    dp[i + 1] = Number(dp[i]) + Number(countArray[i])
  }

  console.log(dp[anj] - dp[ani - 1], dp);
}
for (let i = 2; i < numbers.length; i++) {
  solution(numbers[1], numbers[i][0], numbers[i][1]);
}
