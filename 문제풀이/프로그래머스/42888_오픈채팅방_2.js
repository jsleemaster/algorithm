/**
 * 채팅방에 들어오고 나가거나, 
 * 닉네임을 변경한 기록이 담긴 문자열 배열 record가 매개변수로 주어질 때, 
 * 모든 기록이 처리된 후, 최종적으로 방을 개설한 사람이 보게 되는 메시지를 
 * 문자열 배열 형태로 return 하도록 solution 함수를 완성하라.
 * @param {*} record 
 * @returns 
 */
function solution(record) {
  const users = {}
  const history = []
  const answer = [];
  record.forEach((user) => {
    const [type, uid, name] = user.split(" ")
    if (!users[uid]) users[uid] = {}
    if (type === "Enter") {
      users[uid].name = name
    }
    if (type === "Change") {
      users[uid].name = name
      return;
    }
    history.push({ uid, type })
  })
  history.forEach((history) => {
    answer.push(`${users[history.uid].name}님이 ${history.type === "Enter" ? '들어왔습니다.' : '나갔습니다.'}`)
  })
  return answer;
}

console.log(solution(["Enter uid1234 Muzi", "Enter uid4567 Prodo", "Leave uid1234",
  "Enter uid1234 Prodo", "Change uid4567 Ryan"]))