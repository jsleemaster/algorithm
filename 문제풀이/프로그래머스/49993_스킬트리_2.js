function solution(skill, skill_trees) {
  let answer = 0;
  for (let i = 0; i < skill_trees.length; i++) {
    const el = skill_trees[i].split("");
    const skillCheck = skill.split("")
    let check = true;
    for (let j = 0; j < el.length; j++) {
      const skill = el[j]
      if (skillCheck.includes(skill)) {
        if (skillCheck[0] === skill) {
          skillCheck.shift()
        } else {
          check = false
          break;
        }
      }
    }
    if (check) {
      answer++;
    }
  }

  return answer;
}

console.log(solution("CBD", ["BACDE", "CBADF", "AECB", "BDA"]))//2