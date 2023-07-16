const str = 'test';
str.padStart(10);                                    // "      test"
str.padStart(10, '-');                               // "------test"
str.padEnd(10);                                      // "test      "
str.padEnd(10, '-');                                 // "test------"

const str1 = '  test   ';
str1.trim();                                         // "test"

const str2 = 'Hello, John';                         // 11 символов
str2.startsWith('John');                            // False
str2.startsWith('John', 7);                         // True (начиная с 7 символа начинается John)

str2.endsWith('John');                               // True
str2.endsWith('Hello', 5);                           // True
str2.endsWith('John', 11);                           // True

const str3 = 'If the dog reacted, was it really lazy?';    //! If the monkey reacted, was it really lazy?
console.log(p.replaceAll('dog', 'monkey'));
