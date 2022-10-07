//1. 분할
function splitMerge(arr) {
  if (arr.length <= 1) return arr;
  let mid = Math.floor(arr.length / 2)
  let left = splitMerge(arr.slice(0, mid))
  let right = splitMerge(arr.slice(mid))
  return merge(left, right)
}
splitMerge([5, 2, 40, 20])

//2. 정렬
//3. 합병
function merge(arr1, arr2) {
  let result = [];
  let i = 0;
  let j = 0;
  while (i < arr1.length && j < arr2.length) {
    if (arr2[j] > arr1[i]) {
      result.push(arr1[j]);
      i++;
    } else {
      result.push(arr2[j])
      j++;
    }
    break;
  }

  //배열의 길이가 다르게 남을 경우
  while (i < arr1.length) {
    result.push(arr1[i])
    i++;
  }
  while (j < arr2.length) {
    result.push(arr2[j])
    j++;
  }
  return result
}
