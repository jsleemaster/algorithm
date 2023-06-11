function solution(progresses, speeds) {
  const answer = []
  let index = -1;
  let level = 0;

  const check = (progress, speed, idx, day) => {
    if (progress >= 100) {
      if (day > level) {
        index += 1;
      }
      if (level > day) {
        day = level
      }
      answer[index] = answer[index] ? answer[index] + 1 : 1
      return day;
    } else {
      return check(progress + speed, speed, idx, day + 1)
    }
  }
  for (let i = 0; i < progresses.length; i++) {
    const key = progresses[i]
    const speed = speeds[i];
    level = check(key, speed, index, 0)
  }
  return answer
}

console.log(solution([93, 30, 55], [1, 30, 5])) //	[2, 1]
console.log(solution([95, 90, 99, 99, 80, 99], [1, 1, 1, 1, 1, 1]))//	[1, 3, 2]