// 진법 n, 미리 구할 숫자의 갯수 t, 게임에 참가하는 인원 m, 튜브의 순서 p

function solution(n, t, m, p) {
  const total = t * m
  let number = 0
  let string = ''

  while (total > string.length) {
    string = string.concat(number.toString(n))
    number++
  }
  string = string.slice(0, total)
  return string.split('').filter((_, idx) => (idx - p + 1) % m === 0).join('').toUpperCase()
}
//튜브가 말해야 하는 숫자 t개를 공백 없이 차례대로 나타낸 문자열. 단, 10~15는 각각 대문자 A~F로 출력

console.log(solution(2, 4, 2, 1))//"0111"
console.log(solution(16, 16, 2, 1))//"02468ACE11111111"

