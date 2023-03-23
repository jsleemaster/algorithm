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