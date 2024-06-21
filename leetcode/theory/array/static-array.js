// ! ====================================== Пример №1 ================================================
let staticArray = new Array(5);            // ? Создание статического массива с фиксированной длиной 5

staticArray[0] = "Первый элемент";
staticArray[1] = "Второй элемент";
staticArray[2] = "Третий элемент";
staticArray[3] = "Четвертый элемент";
staticArray[4] = "Пятый элемент";

console.log(staticArray);

// ! ====================================== Пример №2 ================================================

let staticArray = new Array(5);

for (let i = 0; i < staticArray.length; i++) {
  // * [0, 2, 4, 6, 8]
  staticArray[i] = i * 2; 
}

console.log(staticArray);