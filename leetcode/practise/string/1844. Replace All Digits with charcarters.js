// ! 1844. Replace All Digits with Characters
// ? https://leetcode.com/problems/replace-all-digits-with-characters/description/

// * You are given a 0-indexed string s that has lowercase English letters in its
// * even indices and digits in its odd indices. There is a function shift(c, x), 
// * where c is a character and x is a digit, that returns the xth character after c.

// * For example, shift('a', 5) = 'f' and shift('x', 0) = 'x'.
// * For every odd index i, you want to replace the digit s[i] with shift(s[i-1], s[i]).

// * Return s after replacing all digits. It is guaranteed that shift(s[i-1], s[i]) 
// * will never exceed 'z'.

var replaceDigits = function (s) {
  for (let i = 1; i < s.length; i += 2) {
    let str = String.fromCharCode(s[i - 1].charCodeAt() + Number(s[i]));
    
    s = s.replace(s[i], str);
  }
  return s;
};

// * Изучить:
// * fromCharCode
// * charCodeAt