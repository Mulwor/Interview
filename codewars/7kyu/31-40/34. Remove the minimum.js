// ! Remove the minimum

// * Given an array of integers, remove the smallest value. Do not 
// * mutate the original array/list. If there are multiple elements 
// * with the same value, remove the one with the lowest index. If 
// * you get an empty array/list, return an empty array/list.

// * Don't change the order of the elements that are left.

// * Input: [1,2,3,4,5], output = [2,3,4,5]
// * Input: [5,3,2,1,4], output = [5,3,2,4]
// * Input: [2,2,1,2,1], output = [2,2,2,1]


function removeSmallest(numbers) {
  let indexOfMin = numbers.indexOf(Math.min(...numbers));

  return [...numbers.slice(0, indexOfMin), ...numbers.slice(indexOfMin + 1)];
}

function removeSmallest(numbers) {
  const min = Math.min(...numbers);
  
  return numbers.filter((num, index, arr) => index !== arr.indexOf(min));
}

function removeSmallest(numbers) {
  let array = [];
  const index = numbers.indexOf(Math.min(...numbers))
     
  for (let i = 0; i < numbers.length; i++){
    if (i !== index){
      array.push(numbers[i])
    }   
  }

  return array;
} 