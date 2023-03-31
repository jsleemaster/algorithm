function solution(name, yearning, photo) {
  const count = {}
  name.forEach((value, index) => count[value] = yearning[index])
  const answer = []
  for (let i = 0; i < photo.length; i++) {
    let score = 0;
    for (let j = 0; j < photo[i].length; j++) {
      if (count[photo[i][j]]) {
        score += count[photo[i][j]]
      }
    }
    answer.push(score)

  }
  return answer;
}