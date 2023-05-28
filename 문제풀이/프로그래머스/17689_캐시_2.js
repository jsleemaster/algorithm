function solution(cacheSize, cities) {
  let answer = 0;
  const cache = [];
  cities.forEach((e) => {
    e = e.toLowerCase();
    if (cache.includes(e)) {
      //hit
      answer++;
      cache.splice(cache.indexOf(e), 1);
    } else {
      //miss
      answer += 5;
    }
    cache.push(e);
    if (cache.length > cacheSize) cache.shift();
  })

  return answer;
}