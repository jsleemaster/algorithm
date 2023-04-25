function solution(today, terms, privacies) {
  const answer = []
  const now = new Date(today).getTime()

  const term = {}
  terms.forEach((value) => {
    const [type, month] = value.split(" ")
    term[type] = Number(month)
  })

  for (let i = 0; i < privacies.length; i++) {
    const [date, type] = privacies[i].split(" ")
    let [year, month, day] = date.split(".");
    month = Number(month)
    const newMonth = month + term[type]
    if (newMonth > 12) {
      let count = term[type];

      while (count !== 0) {
        count--;
        month++;
        if (month > 12) {
          year++;
          month -= 12;
        }
      }

    } else {
      month = newMonth
    }
    const diffTime = +new Date(year + "." + String(month).padStart(2, "0") + "." + day)
    if (now >= diffTime) {
      answer.push(i + 1)
    }
  }
  return answer.sort((a, b) => a - b)
}
// [1,3]
console.log(solution("2022.05.19", ["A 6", "B 12", "C 3"], ["2021.05.02 A", "2021.07.01 B", "2022.02.19 C", "2022.02.20 C"]))
console.log(solution("2024.06.08", ["A 18"], ["2022.06.08 A"]))//결과 : [1]
console.log(solution("2022.12.08", ["A 6"], ["2022.06.08 A"]))//결과 : [1]
console.log(solution("2021.12.08", ["A 18"], ["2020.06.08 A"]))//결과 : [1]