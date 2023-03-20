/**
 n은 사실 고려하지 않아도 되는 문제입니다.

section의 원소는 오름차순으로 정렬되어 있기 때문에 
section을 순회하며 해당 지점을 시작으로 하여 최대로 칠하고 칠해진 마지막 인덱스를 갱신해 가면 됩니다.

예를 들어 section이 [1,3,4]이고 m이 2인 경우

1. 아직 칠하지 않았으므로 칠해진 마지막 인덱스는 0 입니다
2. 1번 인덱스를 칠했는지 판별합니다 (0 보다 크므로 칠하지 않았습니다)
3. 1, 2번 인덱스를 칠합니다 (칠해진 마지막 인덱스를 2로 갱신합니다)
4. 3번 인덱스를 칠했는지 판별합니다 (2 보다 크므로 칠하지 않았습니다)
5. 3, 4번 인덱스를 칠합니다 (칠해진 마지막 인덱스를 4로 갱신합니다)
6. 4번 인덱스를 칠했는지 판별합니다 (4 보다 크지 않으므로 칠했습니다)

 */

function solution(n, m, section) {
  let answer = 0;
  let max = 0;
  for (let i = 0; i < section.length; i++) {
    const diff = section[i]
    if (diff > max) {
      answer++
      max = diff + m - 1
    }
  }
  return answer;
}