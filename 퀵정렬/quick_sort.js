//스왑이 될 idx를 주는 함수
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
pivot([7, 3, 6, 4, 1, 8, 2])