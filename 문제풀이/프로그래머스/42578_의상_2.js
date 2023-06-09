function solution(clothes) {
  const set = {}
  let answer = 1;
  for (let i = 0; i < clothes.length; i++) {
    const clothesType = clothes[i][1];
    const value = clothes[i][0]
    set[clothesType] ? set[clothesType].push(value) : set[clothesType] = [value]
  }

  for (const [key, value] of Object.entries(set)) {
    answer *= (value.length + 1)
  }

  return answer - 1;
}

// 5
console.log(solution([["yellow_hat", "headgear"], ["blue_sunglasses", "eyewear"], ["green_turban", "headgear"]]))
console.log(solution([["crow_mask", "face"], ["blue_sunglasses", "face"], ["smoky_makeup", "face"]]))
//3