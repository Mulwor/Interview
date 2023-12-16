// 1512. Number of Good Pairs (https://leetcode.com/problems/number-of-good-pairs/)

// Given an array of integers nums, return the number of good pairs.
// A pair (i, j) is called good if nums[i] == nums[j] and i < j.

// Input: nums = [1, 2, 3, 1, 1, 3] => Output: 4
// Input: nums = [1, 1, 1, 1] => Output: 6

// 41ms
var numIdenticalPairs = function(nums) {
    let value = 0
    for (let i = 0; i < nums.length; i++) {
      for (let j = 0; j < nums.length; j++) {
        // if nums[i] === nums[j]) {...}
        if(nums[i] === nums[j] && i < j) {
          value++
        }
      }
    }
    return value
  };
  
  