// 입력으로 네오가 기억한 멜로디를 담은 문자열 m과 방송된 곡의 정보를 담고 있는 배열 musicinfos가 주어진다.

// m은 음 1개 이상 1439개 이하로 구성되어 있다.
// musicinfos는 100개 이하의 곡 정보를 담고 있는 배열로, 각각의 곡 정보는 음악이 시작한 시각, 끝난 시각, 음악 제목, 악보 정보가 ','로 구분된 문자열이다.
// 음악의 시작 시각과 끝난 시각은 24시간 HH:MM 형식이다.
// 음악 제목은 ',' 이외의 출력 가능한 문자로 표현된 길이 1 이상 64 이하의 문자열이다.
// 악보 정보는 음 1개 이상 1439개 이하로 구성되어 있다.

function solution(m, musicinfos) {
  const regex = /(C|D|F|G|A)#/g;
  m = m.replace(regex, (_, a) => a.toLowerCase());
  musicinfos = musicinfos
    .map((music) => {
      let [start, end, title, melody] = music.split(',');
      let h = end.slice(0, 2) - start.slice(0, 2);
      let m = end.slice(3) - start.slice(3);
      const time = h * 60 + m;
      melody = melody.replace(regex, (_, a) => a.toLowerCase());
      return [time, title, melody.padEnd(time, melody).slice(0, time)];
    })
    .filter(([_, $, melody]) => melody.indexOf(m) >= 0)
    .sort(([a], [b]) => b - a);
  return musicinfos[0]?.[1] || '(None)';
}
