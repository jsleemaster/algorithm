const solution = () => {
  combination(2, [], 1)
}


const combination = (cnt, combiArr, number) => {
  if (combiArr.length === cnt) {
    console.log(combiArr)
    return;
  }

  for (let i = number; i <= 3; i++) {
    combiArr.push(i);
    // 중복 값 
    // combination(cnt, combiArr, number);
    combination(cnt, combiArr, number + 1);
    combiArr.pop();
  }

}

solution();