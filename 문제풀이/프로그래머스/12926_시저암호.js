function solution(s, n) {
  let answer = '';
  for (let i = 0; i < s.length; i++) {
    let alpha = s[i]
    if (alpha === " ") {
      answer += " "
      continue;
    }

    let A = "A".charCodeAt()
    let a = "a".charCodeAt()
    let Z = "Z".charCodeAt()
    let z = "z".charCodeAt()
    let char = alpha.charCodeAt()
    let tmpN = 0;
    if (A <= char && char <= Z) {
      tmpN = char + n
      if (tmpN > Z) {
        tmpN = A + Math.abs(Z - tmpN) - 1
      }
    }
    if (tmpN === 0 && a <= char && char <= z) {
      tmpN = char + n
      if (tmpN > z) {
        tmpN = a + Math.abs(z - tmpN) - 1
      }
    }
    alpha = String.fromCharCode(tmpN)

    answer += alpha
  }
  return answer;
}
console.log(solution("AaZz", 25)) // "ZzYy";