// ! Links: https://leetcode.com/problems/shuffle-the-array/

// * Given the array nums consisting of 2n elements in the form
// * [x1,x2,...,xn,y1,y2,...,yn]. Return the array in the form
// * [x1,y1,x2,y2,...,xn,yn].

// ! Необходимо сделать следующюю перестановку из [x1,x2,...,xn, y1,y2,...,yn] 
// ! в [x1,y1,x2, y2,...,xn,yn].

// ! Input: nums = [2,5,1,3,4,7], n = 3
// ! Output: [2,3,5,4,1,7] 

var shuffle = function (nums, n) {
  let result = new Array()
  for (let i = 0; i < n; i++) {
    let firstValue = nums[i]                     // 2, 5, 1
    let secondValue = nums[i + n]                // 3, 4, 7
    result.push(firstValue, secondValue)         // 2, 3, 5, 4, 1, 7
  }
  return result
}

shuffle([2,5,1,3,4,7], 3)
