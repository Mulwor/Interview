// * You are given two strings s and t such that every character occurs at most 
// * once in s and t is a permutation of s. The permutation difference between s
// * and t is defined as the sum of the absolute difference between the index of the occurrence of each character in s and the index of the occurrence of the same character in t.

// * Return the permutation difference between s and t.
// * Input: s = "abc", t = "bac" =====> Output: 2
// * |0 - 1| + |2 - 2| + |1 - 0| = 2.

// * Input: s = "abcde", t = "edbac" ====> Output: 12
// * |0 - 3| + |1 - 2| + |2 - 4| + |3 - 1| + |4 - 0| = 12.

var findPermutationDifference = function(s, t) {
  let result = 0;

  for (let i = 0; i < s.length; i++) {
    // ? s.indexOf(s[i]) // 012
    // ? t.indexOf(s[i]) // 102
    result += Math.abs(s.indexOf(s[i]) - t.indexOf(s[i]))
  }

  return result
};