function solution(s) {
  return s.split(' ').map((value) => {
    if (!value) return ""
    let char = value[0];
    if (value.charCodeAt(0) >= 97 && value.charCodeAt(0) <= 122) {
      char = String.fromCharCode(value.charCodeAt(0) - 32);
    }
    value = char + value.split("").map((value2, i) => {
      if (i !== 0) {
        return value2.toLowerCase();
      }
    }).join('')
    return value
  }).join(' ')
}


// "3people Unfollowed Me"
// console.log(solution("3people unFollowed me"));
console.log(solution("A "));
// For   The