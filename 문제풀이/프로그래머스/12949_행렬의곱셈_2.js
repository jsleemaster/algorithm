function solution(arr1, arr2) {
  const result = Array.from(Array(arr1.length), () => Array(arr2[0].length).fill(0));

  for (let x = 0; x < arr1.length; x++) {
    for (let y = 0; y < arr2[0].length; y++) {
      let sum = 0;
      for (let z = 0; z < arr1[x].length; z++) {
        sum += (arr1[x][z] * arr2[z][y])
      }
      result[x][y] = sum
    }
  }
  return result;
}

console.log(solution([[1, 4], [3, 2], [4, 1]], [[3, 3], [3, 3]])) // [[15, 15], [15, 15], [15, 15]]