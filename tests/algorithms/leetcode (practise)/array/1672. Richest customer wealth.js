// Task: https://leetcode.com/problems/richest-customer-wealth/

// You are given an m x n integer grid accounts where accounts[i][j] is the amount 
// of money the i​​​​​​​​​​​th​​​​ customer has in the j​​​​​​​​​​​th​​​​ bank. Return the wealth that the 
// richest customer has.

// A customer's wealth is the amount of money they have in all their bank accounts. 
// The richest customer is the customer that has the maximum wealth.

// Input: accounts = [[1,2,3],[3,2,1]] =>  1 + 2 + 3 = 6
// Output: 6 => 1 + 2 + 3 = 6;  3 + 2 + 1 = 6

var maximumWealth = function(accounts) {
  let total = 0;

  for (let i = 0; i < accounts.length; i++) {
      let innerArray = accounts[i];

      let sum = 0;    
      for (let j = 0; j < innerArray.length; j++) {
        sum += innerArray[j];
          
        if (total < sum) {
          total = sum;
        }
      }
  }
  return total;
};