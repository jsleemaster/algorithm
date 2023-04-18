function solution(lottos, win_nums) {
  let maxCount = 0;
  let minCount = 0;
  const win = {}
  for (let i = 0; i < win_nums.length; i++) {
    win[win_nums[i]] = true;
  }
  for (let i = 0; i < lottos.length; i++) {
    const lotto = lottos[i]
    if (lotto === 0) {
      maxCount++
      continue;
    }

    if (win[lotto]) {
      maxCount++;
      minCount++;
      continue;
    }
  }
  const winner = {
    '0': 6,
    '1': 6,
    '2': 5,
    '3': 4,
    '4': 3,
    '5': 2,
    '6': 1,
  }
  return [winner[maxCount], winner[minCount]];
}