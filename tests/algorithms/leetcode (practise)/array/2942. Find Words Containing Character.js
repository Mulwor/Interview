// https://leetcode.com/problems/find-words-containing-character/description/

// You are given a 0-indexed array of strings words and a character x.
// Return an array of indices representing the words that contain the character x.
// Note that the returned array may be in any order.

// Input: words = ["leet","code"], x = "e"
// Output: [0,1]
// Explanation: "e" occurs in both words: "leet", and "code". Hence, we return indices 0 and 1.

// Input: words = ["abc","bcd","aaaa","cbc"], x = "a"
// Output: [0,2]
// Explanation: "a" occurs in "abc", and "aaaa". Hence, we return indices 0 and 2.

// Суть данной задачи заключается в том, что к нам приходит массив (words), внутри массива нам
// необходимо узнать есть ли определенные буквы (x). Если они есть то необходимо по индексу их
// запихнуть в массив

// 75ms
var findWordsContaining = function(words, x) {
  let result = [];

  for (let i = 0; i < words.length; i++) {
    // if (words[i].includes(x)) {
    if (words[i].indexOf(x) > -1) {
      result.push(i)
    }
  }

  return result
};