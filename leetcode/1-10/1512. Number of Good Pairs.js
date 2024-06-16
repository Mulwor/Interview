// * Given an array of integers nums, return the number of good pairs.
// * A pair (i, j) is called good if nums[i] == nums[j] and i < j

var numIdenticalPairs = function(nums) {
  let value = 0     // O(1)
  

  for (let i = 0; i < nums.length; i++) {         // O(n)
    for (let j = 0; j < nums.length; j++) {       // O(n)
      if(nums[i] == nums[j] && i < j) {           // O(1)        
        value++
      }
    }
  }

  return value;   // O(1)
};
