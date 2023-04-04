function solution(n, arr1, arr2) {
  let answer = Array(arr1.length).fill(" ".repeat(n));
  arr1.forEach((value, idx) => {
    let newAnswer = answer[idx].split("")
    value.toString(2).padStart(n, 0).split("").forEach((value2, idx2) => Number(value2) ? newAnswer[idx2] = "#" : "")
    answer[idx] = newAnswer.join("");
  })
  arr2.forEach((value, idx) => {
    let newAnswer = answer[idx].split("")
    value.toString(2).padStart(n, 0).split("").forEach((value2, idx2) => Number(value2) ? newAnswer[idx2] = "#" : "")
    answer[idx] = newAnswer.join("");
  })
  return answer;
}

solution(6, [46, 33, 33, 22, 31, 50], [27, 56, 19, 14, 14, 10])
//["#####", "# # #", "### #", "#  ##", "#####"]