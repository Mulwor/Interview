// 1480. Running Sum of 1D Array (https://leetcode.com/problems/running-sum-of-1d-array/description/)
// Дан массив чисел (nums), необходимо определить текущую сумму массива.
// Например [1, 2, 3, 4] => [1, 1+2, 1+2+3, 1+2+3+4] => [1, 3, 6, 10]


// Данный код работает следующим образом: берeтся первое значение у nums[i] и у nums[i-1]. И они между собой складываются. 
// Получается число 3, затем берутся два следующих числа это 3 + 3, складывают и в конце 6 + 4 складываются
var runningSum = function(nums) {
  for (let i = 1; i < nums.length; i++) {
    nums[i] += nums[i-1]
    // nums[i] => 2, 3, 4 ...... nums[i-1] => 1, 3, 6
  }
  return nums
};
