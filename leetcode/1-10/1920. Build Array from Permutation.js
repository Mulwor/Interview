// * Given a zero-based permutation nums (0-indexed), build an array
// * ans of the same length where ans[i] = nums[nums[i]] for each 
// * 0 <= i < nums.length and return it.

// * A zero-based permutation nums is an array of distinct integers from 0 
// * to nums.length - 1 (inclusive).

// ? Input: nums = [0,2,1,5,3,4] ===> Output: [0,1,2,4,5,3]

var buildArray = function(nums) {
  let result = [];  

  for (let i = 0; i < nums.length; i++) { 
    // nums[i] ====> 0, 2, 1, 5, 3, 4
    // nums[nums[i]] ====> 0, 1, 2, 4, 5, 3
    result[i] = nums[nums[i]]; 
  }

  return result; 
}