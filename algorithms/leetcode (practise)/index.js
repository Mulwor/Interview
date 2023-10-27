// https://leetcode.com/problemset/algorithms/?difficulty=EASY&page=1&sorting=W3sic29ydE9yZGVyIjoiREVTQ0VORElORyIsIm9yZGVyQnkiOiJBQ19SQVRFIn1d

// 1929. Concatenation of Array 

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
  let arr = new Array();
  for (let i = 0; i < nums.length; i++) {
    arr[i] = arr[nums.length+i] = nums[i];
  }
  return arr;
};


// =========================================================================================================================================

// 1920. Build Array from Permutation

// Given a zero-based permutation nums (0-indexed), build an array ans of the same length where ans[i] = nums[nums[i]] 
// for each 0 <= i < nums.length and return it.
// A zero-based permutation nums is an array of distinct integers from 0 to nums.length - 1 (inclusive).

// Input: nums = [0,2,1,5,3,4]  ===>   Output: [0,1,2,4,5,3]

var buildArray = function(nums) {   
  let emptyArray = []
  for (let i = 0; i < nums.length; i++) {
    emptyArray[i] = nums[nums[i]]
    // nums[i] => [0, 2, 1, 5, 3, 4];
    // nums[nums[i]] => [0, 1, 2, 4, 5, 3];
  }
  return emptyArray
};


var buildArray = function(nums) {
  return nums.map(num => nums[num]);
};
