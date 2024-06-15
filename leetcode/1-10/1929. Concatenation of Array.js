// Given an integer array nums of length n, you want to create an array ans of
// length 2n where ans[i] == nums[i] and ans[i + n] == nums[i] for 0 <= i < n (0-indexed).

// Specifically, ans is the concatenation of two nums arrays.
// Return the array ans.

// * Уровень сложности: O(n) - линейный, чем больше входных данных (s), тем 
// * больше времени потребуется для выполнения алгоритма
var getConcatenation = function(numbers) {
  return numbers.concat(numbers)
};

var getConcatenation = function(nums) {
  return [...nums, ...nums]
};


var getConcatenation = function(nums) {
  let result = [];

  for (let i = 0; i < nums.length; i++) {
    result[i] = nums[i];
    result[i + nums.length] = nums[i];
  }

  return result
};