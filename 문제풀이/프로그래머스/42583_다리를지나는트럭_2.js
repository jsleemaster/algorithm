function solution(bridge_length, weight, truck_weights) {
  let time = 0;
  const bridge = Array(bridge_length).fill(0); // 다리
  // 다리 위 무게
  let total = 0;

  while (bridge.length > 0) {
    time += 1;
    total -= bridge.shift();

    if (truck_weights.length > 0) {
      if (total + truck_weights[0] <= weight) {
        total += truck_weights[0]; // 무게 남으면 트럭에 추가
        bridge.push(truck_weights.shift());
      } else {
        bridge.push(0); // 여유 없으면 무게 0 추가
      }
    }
  }

  return time;
}

console.log(solution(2, 10, [7, 4, 5, 6])) // 8
console.log(solution(100, 100, [10])) // 101
console.log(solution(100, 100, [10, 10, 10, 10, 10, 10, 10, 10, 10, 10])) // 110