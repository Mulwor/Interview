// =================================== Задача №1 ===================================

// 2635. Apply Transform Over Each Element in Array => Given an integer array arr and 
// a mapping function fn, return a new array with a transformation applied to each 
// element. The returned array should be created such that returnedArray[i] = 
// fn(arr[i], i). Please solve it without the built-in Array.map method.

// Input: arr = [1,2,3], fn = function plusone(n) { return n + 1; }
// Output: [2,3,4]

// Input: arr = [1,2,3], fn = function plusI(n, i) { return n + i; }
// Output: [1,3,5]

// Уровень сложности - O(n), где n - количество элементов в массиве arr.
// O(n) - Чем больше входных данных (n), тем больше времени потребуется
// для выполнения алгоритма.

var map = function(arr, fn) {
  let arrayValue = [];
  for (let i = 0; i < arr.length; i++) {
    arrayValue.push(fn(arr[i], i))
  }
  return arrayValue;
};

var map1 = function(arr, fn) {
  let arrayValue = [];
  arr.forEach((item, i)=>{
    arrayValue.push(fn(item,i))
  })
  return arrayValue;
};

var map2 = function(arr, fn) {
  for (let i = 0; i < arr.length; i++) {
    arr[i] = fn(arr[i], i)
  };
  return arr;
};


// =================================== Задача №2 ===================================

// Given an integer array arr and a filtering function fn, return a filtered array 
// filteredArr. The fn function takes one or two arguments: arr[i] - number from the arr
// i - index of arr[i]. FilteredArr should only contain the elements from the arr
// For which the. Expression fn(arr[i], i) evaluates to a truthy value. A truthy 
// value is a value where Boolean(value) returns true.

// Input: arr = [0,10,20,30], fn = function greaterThan10(n) { return n > 10; }
// Output: [20,30]

// Input: arr = [1,2,3], fn = function firstIndex(n, i) { return i === 0; }
// Output: [1]

var filter = function(arr, fn) {
  let value = [];
  for (let i = 0; i < arr.length; i++) {
    if (fn(arr[i], i)) { 
      value.push(arr[i])
    }
  }
  return value;
};

var filter = function(arr, fn) {
  const filteredArr = [];
  for (let [index, item] of arr.entries()) {
    if (fn(item, index)) {
      filteredArr.push(item);
    }
  }
  return filteredArr;
};


// =================================== Задача №3 ===================================

// 2626. Array Reduce Transformation => Given an integer array nums, a reducer 
// function fn, and an initial value init, return the final result obtained by executing
// the fn function on each element of the array, sequentially, passing in the return 
// value from the calculation on the preceding element.

// This result is achieved through the following operations: val = fn(init, 
// nums[0]), val = fn(val, nums[1]), val = fn(val, nums[2]), ... until every element 
// in the array has been processed. The ultimate value of val is then returned. If the length 
// of the array is 0, the function should return init. Please solve it without using the 
// built-in Array.reduce method.

// Input: nums = [1,2,3,4]; fn = function sum(accum, curr) { return accum + curr; }; init = 0
// Output: 10

// Input: nums = [1,2,3,4] fn = function sum(accum, curr) { return accum + curr * curr; }; init = 100
// Output: 130

var reduce = function(nums, fn, init) {
  // Начальное значение, которое будет изменяться по мере обработки элементов массива nums
  let response = init;
  for (let i = 0; i < nums.length; i++) {
    // На каждой итерации выполняется вызов функции fn с текущим значением response и 
    // текущим элементом массива nums[i]. Результат этого вызова присваивается переменной response.
    response = fn(response, nums[i])
  }

  return response
};

var reduce1 = function(nums, fn, init) {
  let value = init;
  for(let element of nums) {
    value = fn(value,element);
  }
  return value;
}