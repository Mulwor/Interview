// ! Тема: деструктурирующее присваивание

// * Пример с массивом
let arr = ["Ali", "Adigezalli"];
let [first, second] = arr;
console.log(first + " " + second); // * Ali Adigezalli

// * Пример с объектов
let options = {
  title: "Menu",
  width: 100,
  height: 200,
};
let { title, width, height } = options;
console.log(title + " " + width + " " + height); //* Menu 100 200


// ! Тема: псевдомассив arguments
function func1(a, b, c) {
  console.log(arguments);
  console.log(arguments[0]);
}
func1(1, 2, 3);

function func2() {
  console.log(arguments);
  for (let i = 0; i < arguments.length; i++) {
    console.log(arguments)
  } 
}
func2(5, 6, 7, 8, 9)