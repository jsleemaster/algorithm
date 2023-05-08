function solution(n, words) {

  const user = {}
  let number = 1;
  let answer = 1;
  for (let i = 0; i < words.length; i++) {
    const element = words[i]
    if (user[element] || element.length <= 1 || (words[i - 1] && words[i - 1][words[i - 1].length - 1] !== element[0])) {
      return [number, answer]
    }
    user[element] = 1;

    if (number === n) {
      number = 1;
      answer++;
    } else {
      number++;
    }
  };

  return [0, 0];
}
//[3,3]
console.log(solution(3, ["tank", "kick", "know", "wheel", "land", "dream", "mother", "robot", "tank"]))