// ! Links => https://leetcode.com/problems/build-array-from-permutation/

// * Given a zero-based permutation nums (0-indexed), build an array ans of the same length where ans[i] = nums[nums[i]]
// * for each 0 <= i < nums.length and return it. A zero-based permutation nums is an array of distinct integers from 0
// * to nums.length - 1 (inclusive).

// * Input: nums = [0,2,1,5,3,4]
// * Output: [0,1,2,4,5,3]

var buildArray = function (nums) {
  let array = []
  // * 0 [0]; 
  // * 1 [0, 1]; 
  // * 2 [0, 1, 2]; 
  // * 3 [0, 1, 2, 4]; 
  // * 4 [0, 1, 2, 4, 5]; 
  // * 5 [0, 1, 2, 4, 5, 3];
  for (let i = 0; i < nums.length; i++) {
    array[i] = nums[nums[i]]
  }
  return array
}
buildArray([0, 1, 2, 4, 5, 3])

var buildArray = function (nums) {
  return nums.map((num) => nums[num])
}
