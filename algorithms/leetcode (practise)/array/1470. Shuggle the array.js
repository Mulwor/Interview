// 1470. Shuffle the Array (https://leetcode.com/problems/shuffle-the-array/description/)

// Given the array nums consisting of 2n elements in the form [x1,x2,...,xn,y1,y2,...,yn].
// Return the array in the form [x1,y1,x2,y2,...,xn,yn].

// Input: nums = [2,5,1,3,4,7], n = 3
// Output: [2,3,5,4,1,7] 

// 63ms
var shuffle = function (nums, n) {
  let result = []

  for (let i = 0; i < n; i++) {
    result.push(nums[i], nums[i + n])
  }
 
  return result
}
  