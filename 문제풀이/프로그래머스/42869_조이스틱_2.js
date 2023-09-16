/**
- 첫 번째 위치에서 조이스틱을 위로 9번 조작하여 J를 완성합니다.
- 조이스틱을 왼쪽으로 1번 조작하여 커서를 마지막 문자 위치로 이동시킵니다.
- 마지막 위치에서 조이스틱을 아래로 1번 조작하여 Z를 완성합니다.
따라서 11번 이동시켜 "JAZ"를 만들 수 있고, 이때가 최소 이동입니다.
 */
function solution(name) {
  let answer = 0;
  let L2 = 0;
  let move = name.length - 1;
  const length = name.length;

  for (let L1 = 0; L1 < name.length; L1++) {
    answer += Math.min(name.charCodeAt(L1) - 'A'.charCodeAt(0), 'Z'.charCodeAt(0) - name.charCodeAt(L1) + 1);

    let L2_idx = L1 + 1;
    while (L2_idx < length) {
      if (name[L2_idx] === 'A') {
        L2_idx++;
      } else {
        break;
      }
    }
    L2 = length - 1 - L2_idx + 1;
    move = Math.min(move, L1 + L2 + Math.min(L1, L2));
  }
  return answer + move;
}