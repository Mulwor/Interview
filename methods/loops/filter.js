// ! Array.prototype.filter

// todo: 1 вариант => первый вариант
const numbers = [ 1, -4, 7, 12];
const filteredNumbers = numbers.filter(number => number > 0);

const arrayExample = [];

for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] > 0) {
    arrayExample.push(numbers[i]);      // [1, 7, 12]
  }
}
