// ! Array.prototype.includes() - определяет, содержит ли массив определенное значение, возвращая true или false.

// * Параметры: 

// * 1. searchElement - проверяет есть ли это значение
// * 2. fromIndex - индекс, c которого начинается поиск

[1, 2, 3].includes(2);                          // * true
[1, 2, 3].includes(4);                          // * false
[1, 2, 3].includes(3, 3);                       // * false
[1, 2, 3].includes(3, -1);                      // * true
[1, 2, NaN].includes(NaN);                      // * true
["1", "2", "3"].includes(3);                    // * false