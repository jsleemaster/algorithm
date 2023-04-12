
function solution(participant, completion) {
  const part = {}
  participant.forEach((value) => part[value] = part[value] ? part[value] + 1 : 1);
  completion.forEach((value) => {
    part[value] = part[value] - 1;
  })
  return Object.entries(part).filter(([key, value]) => value)[0][0];
}
console.log(solution(["leo", "kiki", "eden"], ["eden", "kiki"])) // leo