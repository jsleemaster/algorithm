function solution(n) {
  let nextNumber = 0;
  let binary = n.toString(2)
  const binaryCount = binary.split("").filter((v) => v === '1').length;
  let check = false;
  let count = 0;
  while (!check) {
    n++;
    count = n.toString(2).split("").filter((v) => v === '1').length;
    if (binaryCount === count) {
      nextNumber = n
      break;
    }
  }
  return nextNumber
}

console.log(solution(78)) //83