function solution(survey, choices) {
  let answer = '';
  const score = {
    1: 3,
    2: 2,
    3: 1,
    4: 0,
    5: 1,
    6: 2,
    7: 3,
  }
  const userMbti = {
    "R": 0,
    "T": 0,
    "C": 0,
    "F": 0,
    "J": 0,
    "M": 0,
    "A": 0,
    "N": 0,
  }

  for (let i = 0; i < survey.length; i++) {
    const disAgree = survey[i][0]
    const Agree = survey[i][1]
    const choiceScore = choices[i];
    if (choiceScore >= 5) {
      userMbti[Agree] += score[choiceScore];
    }
    if (choiceScore < 4) {
      userMbti[disAgree] += score[choiceScore];
    }
  }
  if (userMbti["R"] < userMbti["T"]) {
    answer += "T"
  } else {
    answer += "R"
  }
  if (userMbti["C"] < userMbti["F"]) {
    answer += "F"
  } else {
    answer += "C"
  }
  if (userMbti["J"] < userMbti["M"]) {
    answer += "M"
  } else {
    answer += "J"
  }

  if (userMbti["A"] < userMbti["N"]) {
    answer += "N"
  } else {
    answer += "A"
  }
  return answer
}
console.log(solution(["AN", "CF", "MJ", "RT", "NA"], [5, 3, 2, 7, 5])) // "TCMA"