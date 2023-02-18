const solution = () => {
  const visited = Array(4).fill(false);
  pemutaion(3, [], visited)
}


const pemutaion = (cnt, permuted, visited) => {
  //정렬 된 상태
  if (permuted.length === cnt) {
    console.log(permuted)
    return;
  }

  for (let i = 1; i <= 3; i++) {
    if (!visited[i]) {
      visited[i] = true;
      permuted.push(i);
      pemutaion(cnt, permuted, visited);
      visited[i] = false;
      permuted.pop();
    }
  }

}

solution();