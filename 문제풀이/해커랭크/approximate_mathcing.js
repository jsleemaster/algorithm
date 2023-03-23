/**
 * Approximate Matching
 
Given three strings, text, prefixString, and  suffixString, find:
 - prefixScore: the longest substring  of text matching  the end of prefixString
 - suffixScore : the longest substring of text matching the beginning of suffxiString

Sum the lengths of the two strings to get the text Score. The substring of text that  begins with  the matching prefix and ends with matching suffix, and has the highest textScore, is the correct value to return, If there are  other substrings with equal textScrore, return the lexicographically lowest substring.

Example
text= "engine"
prefixString = "raven"
suffixString = "ginkgo"

- engine matches raven, so prefixScore =2
- engine matches ginkgo, so suffixScore =3
- textScore = prefixScore + suffixScore = 2 + 3 = 5
- The substring of text with the highest textScore is engine


  텍스트, prefixString 및 suffixString의 세 문자열을 지정하면 다음을 찾습니다:
- prefixScore: prefixString의 끝과 일치하는 텍스트의 가장 긴 하위 문자열
- suffixScore : suffixString의 시작과 일치하는 텍스트의 가장 긴 하위 문자열

두 문자열의 길이를 합하여 점수 텍스트를 가져옵니다.
 일치하는 접두사로 시작하여 일치하는 접미사로 끝나는 텍스트 하위 문자열로, 
 textScore가 가장 높은 텍스트 하위 문자열은 반환할 올바른 값입니다. 
 textScrore가 동일한 다른 하위 문자열이 있는 경우 사전적으로 가장 낮은 하위 문자열을 반환하십시오.

 예제
  text= "engine"
  prefixString = "raven"
  suffixString = "ginkgo"

  - engine matches raven, so prefixScore =2
  - engine matches ginkgo, so suffixScore =3
  - textScore = prefixScore + suffixScore = 2 + 3 = 5
  - The substring of text with the highest textScore is engine
 */

function approximateMatching(text, prefixString, suffixString) {
  let prefixScore = 0;
  let suffixScore = 0;
  let textScore = 0;
  let maxTextScore = 0;
  let result = '';

  // prefixScore 구하기
  for (let i = prefixString.length; i >= 0; i--) {
    let prefix = prefixString.substring(i);
    if (text.endsWith(prefix)) {
      prefixScore = prefix.length;
      break;
    }
  }

  // suffixScore 구하기
  for (let i = 0; i <= suffixString.length; i++) {
    let suffix = suffixString.substring(0, i);
    if (text.startsWith(suffix)) {
      suffixScore = suffix.length;
      break;
    }
  }

  // textScore 구하기
  for (let i = prefixScore; i <= text.length - suffixScore; i++) {
    for (let j = suffixScore; j <= text.length - i; j++) {
      let textSubstring = text.substring(i, text.length - j);
      let currentTextScore = prefixScore + suffixScore + textSubstring.length;
      if (currentTextScore > maxTextScore) {
        maxTextScore = currentTextScore;
        result = textSubstring;
      } else if (currentTextScore === maxTextScore && textSubstring < result) {
        result = textSubstring;
      }
    }
  }

  return result;
}