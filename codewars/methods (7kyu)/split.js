// !. String.prototype.split() - разбивает строки в массив по указанному в первом параметре разделителю. 

// * Параметры

// * 1. В качестве первого параметра можно указать любой разделитель. Если его нет, то
// * он просто преобразует строку в массив. Если мы укажем в качестве разделетиля какую-то букву
// * или символ, то он проигнорирует его и преобразует в массив

// * 2. limit - максимальное кол-во элементов в массива, которого мы хотим получить

let example_1 = 'abcdefg'
example_1.split("")                             // * ['a', 'b', 'c', 'd', 'e', 'f', 'g']
example_1.split("", 2)                          // * ['a', 'b']
example_1.split()                               // * ['abcdefg']



let example_2 = 'The morning is upon us';
example_2.split("")                             // * ['T', 'h', 'e', ' ', 'm', 'o', 'r', 'n', 'i' ...]
example_2.split(" ")                            // * ['The', 'morning', 'is', 'upon', 'us']
example_2.split('o')                            // * ['The m', 'rning is up', 'n us']
example_2.split('o', 0)                         // * []
example_2.split('o', 2)                         // * ['The m', 'rning is up',]



let example_3 = 'ab-cd-ef';
example_3.split('-')                            // * ['ab', 'cd', 'ef']
example_3.split('-', 2)                         // * ['ab', 'cd']



// * Пример замены split() на цикл

function example(input) {
  let result = [];
  for (let i = 0; i < input.length; i++) {
    result.push(input[i]);
  }
  return result;
}

str("example");
