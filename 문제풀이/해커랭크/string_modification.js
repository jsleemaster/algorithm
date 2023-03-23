/**
 * String Modification
 
   As an assginment, students at HackerLang High School have been asked to modify a string
   by performing specific moves on it. Given a string s of lowercase English characters('a' - 'z'),
   two types of moves can be performed on any index, any number of times:
   1. Decrement the character by 1. The letter 'a' cannot be decremented
   2. Increment the character by 1. Letter 'z' cannot be incremented.

   For Example, increment 'f'to 'g' or decrement 'f' to 'e'.

   The string should be modified such that every character has at least 1 equal adjacent
   character. The first and last characters of a string only have a single adjacent character,
   so the two characters at each end must match one another. For example , "aaabb" and "aaccdd"
   are good, but "abaaa and "abcdef" are not.

   Calculate the minimum number of moves required to modify the string to a good form.

 */

function minMoves(s) {
  let moves = 0;
  let n = s.length;

  // handle first character
  if (s[0] != s[1]) {
    moves += Math.abs(s.charCodeAt(1) - s.charCodeAt(0));
  }

  // handle middle characters
  for (let i = 1; i < n - 1; i++) {
    let diff = Math.abs(s.charCodeAt(i + 1) - s.charCodeAt(i));
    if (diff > 1) {
      moves += diff - 1;
    }
  }

  // handle last character
  if (s[n - 1] != s[n - 2]) {
    moves += Math.abs(s.charCodeAt(n - 2) - s.charCodeAt(n - 1));
  }

  return moves;
}


//2안
function minMovesTwo(s) {
  let n = s.length;
  let ans = Number.MAX_SAFE_INTEGER;

  // Check if first and last characters match
  if (s.charAt(0) == s.charAt(n - 1)) {
    let curr = 1;
    let prev = 0;
    let count = 0;
    // Count the number of moves required to modify the string
    while (curr < n) {
      if (s.charAt(curr) == s.charAt(prev)) {
        curr++;
      } else {
        count++;
        prev = curr - 1;
      }
    }
    ans = Math.min(ans, count);
  }

  // Check if first and last characters don't match
  if (s.charAt(0) != s.charAt(n - 1)) {
    let curr = 1;
    let prev = 0;
    let count = 1;
    // Count the number of moves required to modify the string
    while (curr < n) {
      if (s.charAt(curr) == s.charAt(prev)) {
        curr++;
      } else {
        count++;
        prev = curr - 1;
      }
    }
    ans = Math.min(ans, count);
  }

  return ans;
}