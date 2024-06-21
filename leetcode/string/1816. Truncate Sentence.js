// ! 1816. Truncate Sentence (https://leetcode.com/problems/truncate-sentence/description/)

var truncateSentence = function(s, k) {
  return s.split(" ", k).join(' ')
};

var truncateSentence = function(s, k) {
  return s.split(' ').slice(0, k).join(" ");
};

// https://leetcode.com/tag/string