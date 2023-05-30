function solution(str1, str2) {
  const A = {};
  const B = {};
  const inter = {};

  str1.split("").forEach((value, i) => {
    const left = str1[i].toLowerCase();
    const right = str1[i + 1]?.toLowerCase();
    if ((left.charCodeAt() >= 97 && left.charCodeAt() <= 122) && (right?.charCodeAt() >= 97 && right.charCodeAt() <= 122)) {
      A[left + right] = A[left + right] ? A[left + right] + 1 : 1;
    }
  });

  str2.split("").forEach((value, i) => {
    const left = str2[i].toLowerCase();
    const right = str2[i + 1]?.toLowerCase();
    if ((left.charCodeAt() >= 97 && left.charCodeAt() <= 122) && (right?.charCodeAt() >= 97 && right.charCodeAt() <= 122)) {
      B[left + right] = B[left + right] ? B[left + right] + 1 : 1;
    }
  });

  if (Object.keys(B).length === 0 && Object.keys(A).length === 0) return 65536;

  for (const [key, value] of Object.entries(B)) {
    if (A[key]) {
      inter[key] = Math.min(A[key], value);
    }
  }
  let Alen = 0;
  let Blen = 0;
  let Ilen = 0;
  if (Object.values(A).length !== 0) {
    Alen = Object.values(A).reduce((a, b) => a + b)
  } 
  if (Object.values(B).length !== 0) {
    Blen = Object.values(B).reduce((a, b) => a + b)
  }
  if (Object.values(inter).length !== 0) {
    Ilen = Object.values(inter).reduce((a, b) => a + b)
  } 
  return Math.floor(Ilen / (Alen + Blen - Ilen) * 65536);
}

// console.log(solution("FRANCE", "french")) // 16384
// console.log(solution("aa1+aa2", "AAAA12")) // 43690
console.log(solution("A+C", "DEF")) // 0
// console.log(solution("E=M*C^2", "e=m*c^2")) // 65536