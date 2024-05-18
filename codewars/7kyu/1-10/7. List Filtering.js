// ! List Filtering

// * In this kata you will create a function that takes a list of non-negative integers
// * and strings and returns a new list with the strings filtered out.

// * filter_list([1,2,'a','b']) == [1,2]
// * filter_list([1,'a','b',0,15]) == [1,0,15]
// * filter_list([1,2,'aasf','1','123',123]) == [1,2,123]


function filter_list(l) {
  return l.filter((step) => typeof step !== 'string')
}


// ! =============================== Теория ==========================================

// todo | 1. typeof оператор - возвращает строку, указывающую тип операнда.

console.log(typeof 42);                  // Expected output: "number"
console.log(typeof 'blubber');           // Expected output: "string"
console.log(typeof true);                // Expected output: "boolean"
console.log(typeof undeclaredVariable);  // Expected output: "undefined"