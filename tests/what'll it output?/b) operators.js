console.log(' ---- Строгое равенство и нестрогое равенство -----')

console.log(2 == '2')                                    // * true
console.log(2 === '2')                                   // * false
console.log(undefined == null)                           // * true
console.log(undefined === null)                          // * false
console.log('0' == false)                                // * true
console.log('0' == 0)                                    // * true 
console.log(0 == 0)                                      // * true
console.log(null == 0)                                   // * false

console.log(false == '')                                 // * true
console.log(false == {})                                 // * false
console.log('' == 0)                                     // * true
console.log('' == {})                                    // * false
console.log(0 == {})                                     // * false                     

console.log(false == [])                                 // * true (Пустой массив преобразовывается в пустую строку. А та, в свою очередь - в false.)
console.log(0 == [])                                     // * true  
console.log(0 == [0])                                    // * true (преобразуется в строку)
console.log('' == [])                                    // * true

console.log(3 == new Number(3))                          // * true
console.log(3 == Number(3))                              // * true   
console.log(3 === new Number(3))                         // * false
console.log(3 === Number(3))                             // * true


console.log('true' == true)                             // * false (!true => false == true)
console.log(false == 'false')                           // * false  (!false => true === false)
console.log(null == '')                                 // * false  
console.log(!!"false" == !!"true")                      // * true
console.log([1] > null)                                 // * true
console.log(["x"] == "x")                               // * True
console.log([1,2,3] == [1,2,3])                         // * False




console.log('--------------------- Счет ----------------------')
// ? Сложение, что касает строки преобразует в строки значения
console.log(1 + '2')                                     // * '12'
console.log(1 + '2' + 3)                                 // * '123'
console.log('' + 1 + 0)                                  // * '10'
console.log(1 + "" + 0)                                  // * '10'
console.log(4 + 10 + 'px')                               // * '14px'
console.log('px' + 5 + 10)                               // * 'px510'
console.log("number" + 15 + 3)                           // * 'number153'
console.log(5 + 'px' + 5)                                // * '5px5'
console.log(null + 2)                                    // * 2
console.log(undefined + 42)                              // * NaN
console.log(true + false)                                // * 0 + 1 = 1
console.log(+true)                                       // * 1
console.log(!"John")                                     // * false
console.log(1 + + 1)                                     // * 2
console.log("foo" + + "bar")                             // * "FooNaN"
console.log([] + null + 1)                               // * null1 ([] - преобразуется в строку)
console.log(!+[])                                        // * true
console.log([]+![])                                      // * false
console.log(!+[]+[]+![])                                 // * truefalse
console.log({} + [])                                     // * [object Object]
console.log({}+[]+{}+[1])                                // * [object Object] [object Object]1
console.log(new Date(0) + 0)                             // * Thu Jan 01 1970 03:00:00 GMT+0300 (Москва, стандартное время)0



// ? Вычитание, умножения и деления
console.log('' - 1)                                      // * -1 (0 - 1 => -1)
console.log('' - 1 + 0)                                  // * -1 (0 - 1 + 0 => -1)
console.log('42' - 40)                                   // * 2 (42 - 40)
console.log('42px' - 2)                                  // * NaN 
console.log(new Date(0) - 0)                             // * 0
console.log('3' * '8')                                   // * 24 (3 * 8 (преобразование в число))      
console.log(12 / 4)                                      // * 3
console.log(12 / "6")                                    // * 2

        

console.log('------------------------ Логические операторы ---------------------')
// ? Или (||) - возвращает первое истинное (truthy) найденное значение. Если они обы ложны, то возвращает последнее
console.log(0 || 1)                                     // * 1
console.log(true || false)                              // * true
console.log(0 || 1 || 2 || 3)                           // * 1 
console.log('str' || 1 || null)                         // * 'str'
console.log(null || undefined)                          // * undefined
console.log(0 || '' || null)                            // * null

              
// ? И (&&) - возвращает первое ложное значение (falsy)
console.log(1 && 3)                                     // * 3
console.log(0 && 1)                                     // * 0
console.log(true && false)                              // * false
console.log(0 && 1 && 2 & 3)                            // * 0 
console.log('str' && 1 && null)                         // * null
console.log(null && undefined)                          // * null
console.log(0 && '' && null)                            // * 0

console.log(1 || 2 && 3)                                // * 1 (1 || 3) = 1
console.log(0 || 2 && 3)                                // * 3
console.log(0 || 1 || 2 && 3 && null)                   // * 1
console.log(1 && 2 || 0)                                // * 2
console.log(1 && false || 0)                            // * 0 (false || 0 => 0) (1 && 0) 
console.log(1 && false || 1)                            // * 1 