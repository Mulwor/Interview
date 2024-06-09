// ! 3110. Score of a String
// ! https://leetcode.com/problems/score-of-a-string/description/

// * You are given a string s. The score of a string is defined as the sum of 
// * the absolute difference between the ASCII values of adjacent characters.
// * Return the score of s.

// ? Input: s = "hello";
// ? Output: 13;

// ? Runtine: 62ms, memory: 50.13 MB
var scoreOfString = function(s) {
  let result = 0;

  for (let i = 0; i < s.length - 1; i++) {
    result += Math.abs(s[i].charCodeAt() - s[i + 1].charCodeAt());
  }

  return result
};

// * Уровень сложности: O(n) - линейный, чем больше входных данных (s), тем 
// * больше времени потребуется для выполнения алгоритма
var scoreOfString = (s) => {
  let sum = 0;      // ? O(1)

  for (let i = 1; i < s.length; i++) {                          // ? O(n)  
    sum += Math.abs(s.charCodeAt(i) - s.charCodeAt(i - 1));     // ? В данном участке кода все будет O(1)
  }

  return sum;
};