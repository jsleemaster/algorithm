function solution(dartResult) {
  let number = 1;
  const dart = [0, 0, 0]
  let sequence = -1;
  for (let i = 0; i < dartResult.length; i++) {
    const str = dartResult[i];
    if (str === "*") {
      if (sequence === -1) {
        dart[sequence + 1] = 2;
      } else {
        for (let i = sequence - 1; i <= sequence; i++) {
          dart[i] *= 2;
        }
      }
    }
    if (str === "#") {
      dart[sequence] *= (-1);
    }

    if (str === "S") {
      sequence++;
      dart[sequence] += Math.pow(number, 1)
    } else if (str === "D") {
      sequence++;
      dart[sequence] += Math.pow(number, 2)
    } else if (str === "T") {
      sequence++;
      dart[sequence] += Math.pow(number, 3)
    };

    if (/[0-9]/.test(Number(str))) {
      if (str === '1' && dartResult[i + 1] === '0') {
        number = 10;
        i++;
      } else {
        number = Number(str);
      }
    }
  }
  return dart.reduce((prev, next) => prev + next, 0);
}
// console.log(solution('1D2S#10S')) //9
// console.log(solution('1S2D*3T	')) //37
// console.log(solution('1T2D3D#')) //-4
console.log(solution('1D2S3T*')) //59