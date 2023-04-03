function solution(s, skip, index) {
  const alphabet = "abcdefghijklmnopqrstuvwxyz";
  let answer = "";
  for (let i = 0; i < s.length; i++) {
    let idx = alphabet.indexOf(s[i]);
    let flag = true;
    for (let k = 0; k < index; k++) {
      idx++;
      if (idx > (alphabet.length - 1)) {
        idx -= alphabet.length
      }

      for (let j = 0; j < skip.length; j++) {
        if (alphabet[idx] === skip[j]) {
          k--;
        }
      }
    }
    if (idx > (alphabet.length - 1)) {
      idx -= alphabet.length
    }
    answer += alphabet[idx];

  }
  return answer
}