//해당 자리에 수 알아내기
function getDigit(num, i) { // num , i는 원하는 위치의 값
  //abs = 절대값
  //pow = 제곱근
  //ex 12345, 0 --> 12345의 자릿수는 0자리부터 10의 0 제곱으로 들어감 5= 10의 0 4= 10의 1... 이런 식
  return Math.floor(Math.abs(num) / Math.pow(10, i)) % 10; 
}

//최대 자릿수계산
function mostDigits(nums) {
  //자릿수 계산
  function digitCount(num) { 
    //423 -> 3 
    //22 -> 2
    //7 -> 1
    if (num === 0) return 1;
    return Math.floor(Math.log10(Math.abs(num))) + 1;
  }
  //주어진 수 중에서 어떤 수의 자릿수가 가장 높은지
  //ex ) 1,553,8756 -> 4
  let maxDigits = 0;
  for (let i = 0; i < nums.length; i++) {
    maxDigits = Math.max(maxDigits, digitCount(nums[i]));
  }
  return maxDigits;
}

// 1. 자릿수 최댓값 구하기 - 최대 반복문을 위함
// 2. 10개의 빈배열 만들기 Array.from({length:10}, ()=> [] )  //0123456789 << 자릿수가 10개이기 때문 -> 버킷
function radixSort(nums) {
  let maxDigit = mostDigits(nums)
  for (let k =0; k< maxDigit; k++ ) {
    let bucket = Array.from({length:10}, ()=> [])
    for (let i=0; i < nums.length; i++ ) {
      let digit = getDigit(nums[i],k);
      bucket[digit].push(nums[i])
    }
    nums = [].concat(...bucket)
  }
  return nums
}
 



