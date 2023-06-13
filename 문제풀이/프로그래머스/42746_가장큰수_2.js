function solution(numbers) {
  numbers = numbers.map((value) => String(value)).sort((a, b) => (b + a) - (a + b))

  return numbers.join("")[0] === "0" ? "0" : numbers.join("")
}
// console.log(solution([6, 10, 2])) // 6201
console.log(solution([0, 0, 0, 0, 0])) // 0