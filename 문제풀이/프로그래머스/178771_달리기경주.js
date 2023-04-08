function solution(players, callings) {
  const map = {}
  const map2 = {}
  players.forEach((element, idx) => {
    map[element] = idx
    map2[idx] = element;
  });
  callings.forEach((el) => {
    const idx = map[el];
    const el2 = map2[idx - 1];

    map[el] = idx - 1;
    map[el2] = idx;

    map2[idx - 1] = el;
    map2[idx] = el2;
  });
  return Object.values(map2);
}
// ["mumu", "kai", "mine", "soe", "poe"]
solution(["mumu", "soe", "poe", "kai", "mine"], ["kai", "kai", "mine", "mine"])