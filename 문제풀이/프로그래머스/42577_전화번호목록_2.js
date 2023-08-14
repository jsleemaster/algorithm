
function solution(phoneBook) {
  const obj = {};

  for (const number of phoneBook) {
    obj[number] = true;
  };
  for (const number of phoneBook) {
    for (let i = 1; i < number.length; i++) {
      const prefix = number.slice(0, i);
      if (obj[prefix]) return false;
    };
  };
  return true
}

console.log(solution(["119", "97674223", "1195524421"])) // false
console.log(solution(["123", "456", "789"])) // true