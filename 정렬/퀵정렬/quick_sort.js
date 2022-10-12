//중간 지점 idx를 주는 함수
function pivot(arr, start = 0, end = arr.length - 1) {
  function swap(arr, idx1, idx2) {
    [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
  }
  let pivotArr = arr[start];
  let swapIdx = start;
  for (let i = start + 1; i < end; i++) {
    if (pivotArr > arr[i]) {
      swapIdx++;
      swap(arr, swapIdx, i)
    }
  }
  swap(arr, swapIdx, start)
  return swapIdx;
}
function quickSort(arr, left = 0, right = arr.length - 1) {
  if (left < right) {
    let pivotIdx = pivot(arr, left, right)
    //left
    quickSort(arr, left, pivotIdx - 1)
    //right
    quickSort(arr, pivotIdx + 1, right)
  }
  return arr
}