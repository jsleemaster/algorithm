function solution(people, limit) {
  people.sort((a, b) => a - b);
  let answer = 0;

  while (people.length !== 0) {
    let p = people.pop();
    while (p < limit) {
      if (p + people.at(-1) <= limit) {
        p += people.pop();
      } else if (p + people[0] <= limit) {
        p += people.shift();
      } else {
        break;
      }
    }
    answer++;
  }
  return answer;

}
console.log(solution([70, 50, 80, 50], 100)) //3