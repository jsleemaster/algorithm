function solution(s) {
  return s.split(' ').map((value) => {
    if (value.charCodeAt(0) >= 97 && value.charCodeAt(0) <= 122) {
      let char = value.charCodeAt(0) - 32;
      value = String.fromCharCode(char) + value.split("").map((value2, i) => {
        if (i !== 0) {
          return value2.toLowerCase();
        }
      }).join('')
    } else {
      if (!value) return ""
      value = value[0] + value.split("").map((value2, i) => {
        if (i !== 0 && value2) {
          return value2.toLowerCase();
        }
      }).join('')
    }
    return value
  }).join(' ')
}


// "3people Unfollowed Me"
// console.log(solution("3people unFollowed me"));
console.log(solution("A "));
// For   The