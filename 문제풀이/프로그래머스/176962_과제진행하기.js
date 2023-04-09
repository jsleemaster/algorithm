
function solution(plans) {
  const play = []
  for (let i = 0; i < plans.length; i++) {
    const [name, start, playtime] = plans[i];
    const hour = Number(start.split(":")[0]);
    const splitHour = (hour * 60) + Number(start.split(":")[1]);
    play.push({ startTime: splitHour, name, endTime: splitHour + Number(playtime), playtime: Number(playtime) });
  }
  play.sort((a, b) => a.startTime - b.startTime);

  const answer = [];
  let currentTime = 0;
  let stack = [];
  for (let i = 0; i < play.length; i++) {
    const { startTime } = play[i]

    if (!stack.length) {
      currentTime = startTime;
      stack.push(play[i])
      continue;
    }
    if (startTime < currentTime + stack[stack.length - 1].playtime) {
      const test = stack.pop();
      //남은시간 계산
      test.playtime = currentTime + test.playtime - startTime;
      test.endTime = currentTime + test.playtime;
      stack.push(test);
      stack.push(play[i]);
      currentTime = startTime;

    } else {
      // 기존에 해야할일을 끝낸다.
      while (stack.length && currentTime + stack[stack.length - 1].playtime <= startTime) {
        const prevTask = stack.pop();
        answer.push(prevTask.name);
        currentTime += prevTask.playtime;
      }
      if (stack.length) {
        stack[stack.length - 1].playtime = currentTime + stack[stack.length - 1].playtime - startTime;
      }
      currentTime = startTime;
      stack.push(play[i]);
    }
  }

  while (stack.length) {
    const { name } = stack.pop();
    answer.push(name);
  }

  return answer;
}
//["science", "history", "computer", "music"]
// solution([["science", "12:40", "50"], ["music", "12:20", "40"], ["history", "14:00", "30"], ["computer", "12:30", "100"]])
//["korean", "english", "math"]
// solution([["korean", "11:40", "30"], ["english", "12:10", "20"], ["math", "12:30", "40"]]);
//["bbb", "ccc", "aaa"]        
// console.log(solution([["aaa", "12:00", "20"], ["bbb", "12:10", "30"], ["ccc", "13:00", "10"]]))
// 2314 
// 제 예상대로 나온 거면 남은 과제 시간 갱신을 해주는 부분이 없는 게 문제로 보이네요.

console.log(solution([
  ["1", "00:00", "30"], ["2", "00:10", "10"],
  ["3", "00:30", "10"], ["4", "00:50", "10"]]));
