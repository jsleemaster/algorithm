function solution(s) {
  let count = 0;
  let zero = 0;
  while (s !== "1") {
    let first = s.length;
    s = s.split("0").join("");
    zero += (first - s.length);
    s = s.length.toString(2);
    count++;
  }
  return [count, zero];
}

console.log(solution("110010101001")) // [3,8]
