console.log("---- Простая проверка----")

console.log(typeof 0)                               // * number
console.log(typeof true)                            // * boolean
console.log(typeof 'Javascript')                    // * string
console.log(typeof undefined)                       // * undefined
console.log(typeof Math)                            // * object
console.log(typeof Symbol('JS'))                    // * symbol
console.log(typeof null)                            // * object
console.log(typeof function() {})                   // * function
console.log(typeof NaN)                             // * number
console.log(typeof typeof 100)                      // * string


console.log("---- Явное приведение типов, а также thruthy/fasly----")

console.log(Boolean(''))                            // * false
console.log(Boolean('Hello'))                       // * true
console.log(Boolean(' '))                           // * true
console.log(Boolean('0'))                           // ? true
console.log(Boolean(0))                             // * false
console.log(Boolean(1))                             // * true
console.log(Boolean(null))                          // * false
console.log(Boolean(undefined))                     // * false
console.log(Boolean(false))                         // * false
console.log(Boolean([]))                            // * true
console.log(Boolean({}))                            // * true
console.log(Boolean(Symbol()))                      // * true
console.log(Boolean(function(){}))                  // * true

console.log(Number(" 123 "))                        // * 123
console.log(Number("123z"))                         // * NaN
console.log(Number(true))                           // * 1
console.log(Number(false))                          // * 0
console.log(Number("\n"))                           // * 0

console.log(String(123))                            // * '123'
console.log(String(-12.3))                          // * '-12.3'
console.log(String(null))                           // * 'null'
console.log(String(undefined))                      // * 'undefined'