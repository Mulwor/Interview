// ! Links => https://leetcode.com/problems/concatenation-of-array/description/

// * Given an integer array nums of length n, you want to create an array ans of length 2n
// * where ans[i] == nums[i] and ans[i + n] == nums[i] for 0 <= i < n (0-indexed).
// * Specifically, ans is the concatenation of two nums arrays. Return the array ans.

// * Input: nums = [1,2,1]
// * Output: [1,2,1,1,2,1]

// ? Мое решение
var getConcatenation = function (nums) {
  return [...nums, ...nums]
}

// ? Решение других (1)
var getConcatenation = function (nums) {
  return nums.concat(nums)
}

// ? Решения других (2)
var getConcatenation = function (nums) {
  const result = []
  for (let i = 0; i < nums.length; i++) {
    result[i] = nums[i]                 // * Берет из nums и присваивает пустому массиву: 1, 2, 1
    result[i + nums.length] = nums[i]   // * В массиве находится [1, 2, 1] и таким образом мы можем продублировать
  }
  return result
}


