
function solution(files) {
  return files
    .map((file) => file.match(/(\D+)(\d+)/))
    .sort((a, b) => {
      if (a[1].toLowerCase() > b[1].toLowerCase()) {
        return 1;
      } else if (a[1].toLowerCase() < b[1].toLowerCase()) {
        return -1;
      } else {
        return Number(a[2]) - Number(b[2]);
      }
    })
    .map((file) => file.input);
}

// function solution(files) {
//   let NumberIdx = 0;
//   let TailIdx = 0;
//   const mapping = []
//   for (let i = 0; i < files.length; i++) {
//     let tailCheck = false;
//     let numCheck = false;
//     for (let j = 0; j < files[i].split("").length; j++) {
//       const value = files[i][j]
//       if ((value === " " || !isNaN(Number(value))) && !numCheck) {
//         NumberIdx = j;
//         numCheck = true;
//       }
//       if (((value !== " " && isNaN(Number(value))) && numCheck) || (NumberIdx + 4 < j)) {
//         tailCheck = true;
//         TailIdx = j;
//         break;
//       }
//     }
//     const Head = files[i].slice(0, NumberIdx).toLowerCase()
//     const Numbers = files[i].slice(NumberIdx, TailIdx);
//     mapping.push([Head, Numbers, files[i]])
//   }
//   return mapping.sort((a, b) => {

//     if (a[0] > b[0]) {
//       return 1
//     } else if (a[0] < b[0]) {
//       return -1
//     } else {
//       return Number(a[1]) - Number(b[1]);
//     }
//   }).map((value) => value[2])

// }
//: ["img1.png", "IMG01.GIF", "img02.png", "img2.JPG", "img10.png", "img12.png"]
// console.log(solution(["img12.png", "img10.png", "img02.png", "img1.png", "IMG01.GIF", "img2.JPG"]))
// 출력: ["A-10 Thunderbolt II", "B-50 Superfortress", "F-5 Freedom Fighter", "F-14 Tomcat"]
console.log(solution(["F-5 Freedom Fighter", "B-50 Superfortress", "A-10 Thunderbolt II", "F-14 Tomcat"]))