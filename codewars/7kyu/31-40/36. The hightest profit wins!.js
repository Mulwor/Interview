// ! The hightest profit wins!

// * Write a function that returns both the minimum and maximum number of the
// * given list/array.

// * [1,2,3,4,5] --> [1,5]
// * [2334454,5] --> [5,2334454]
// * [1]         --> [1,1] 
 
function minMax(arr){
  return [ Math.min(...arr), Math.max(...arr) ]; 
}

function minMax(arr){
  let max = arr[0];
  let min = arr[0];
  
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max) max = arr[i];
    if (arr[i] < min) min = arr[i];
  }
  
  return [min,max];
}