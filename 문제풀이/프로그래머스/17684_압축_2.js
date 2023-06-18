function solution(msg) {
  const obj = {}
  "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("").map((v, i) => obj[v] = i + 1)
  const answer = []
  let length = Object.values(obj).length;
  const assmble = (word, idx, cnt, prev = null,) => {
    if (obj[word]) {
      return assmble(word + msg[idx + 1], idx + 1, cnt + 1, word)
    } else {
      length++
      obj[word] = length;
      return [obj[prev], cnt];
    }
  }

  for (let i = 0; i < msg.length; i++) {
    const word = msg[i];
    const [value, cnt] = assmble(word, i, -1)
    i = i + cnt
    answer.push(value)
  }
  return answer;
}

// console.log(solution("KAKAO")) //[11,1,27,15]
//[20, 15, 2, 5, 15, 18, 14, 15, 20,
// 27, 29, 31, 36, 30, 32, 34]
console.log(solution("TOBEORNOTTOBEORTOBEORNOT")) 
