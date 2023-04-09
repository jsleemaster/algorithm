
function solution(nums) {
  let sieve = new Array(3001).fill(true);
  for (let i = 2; i * i < sieve.length; i += 1) {
    if (!sieve[i]) continue;
    for (let j = i + i; j < sieve.length; j += i) {
      sieve[j] = false;
    }
  }

  let answer = 0;
  for (let i = 0; i < nums.length; i += 1) {
    for (let j = i + 1; j < nums.length; j++) {
      for (let n = j + 1; n < nums.length; n++) {
        const idx = nums[i] + nums[j] + nums[n];
        if (sieve[idx]) {
          answer++;
        }
      }
    }
  }
  return answer;
}