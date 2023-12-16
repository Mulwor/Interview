// 1929. Concatenation of Array (https://leetcode.com/problems/concatenation-of-array)

// Given an integer array nums of length n, you want to create an array ans of length 2n where ans[i] == nums[i] 
// and ans[i + n] == nums[i] for 0 <= i < n (0-indexed).
// Specifically, ans is the concatenation of two nums arrays. Return the array ans.

// Input: nums = [1,2,1]    ======>    Output: [1,2,1,1,2,1]

// 51ms => O(n) and O(1)
var getConcatenation = function(nums) {
  return nums.concat(nums)
};

// 79ms => O(n)
var getConcatenation = function(nums) {
  return [...nums, ...nums]
};

// 74ms => O(n)
var getConcatenation = function(nums) {
  let value = nums.length;
  for (let i = 0; i < value; i++) {
    nums.push(nums[i]);
  }
  return nums;
};

// 62ms => O(n)
var getConcatenation = function(nums) {
  let arr = [];
  for (let i = 0; i < nums.length; i++) {
    arr[i] = arr[nums.length + i] = nums[i];
  }
  return arr;
};