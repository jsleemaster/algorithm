
function solution(s) {
  const answer = [];
  const arr = JSON.parse(s.replace(/{/g, "[").replace(/}/g, "]"));
  arr.sort((a, b) => a.length - b.length);
  arr.forEach((col) => {
    col.forEach((row) => {
      if (!answer.includes(row)) answer.push(row);
    });
  });
  return answer;
}

// console.log(solution("{{2},{2,1},{2,1,3},{2,1,3,4}}")) //[2,1,3,4]
console.log(solution("{{1,2,3},{2,1},{1,2,4,3},{2}}")) //[2,1,3,4]