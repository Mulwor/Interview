// ! Как определить наличие свойства в объекте?
let value = {
  prop1: "foo",
  prop2: "bar",
};
console.log(obj.hasOwnProperty("prop1")); // True
console.log(obj.hasOwnProperty("prop3")); // False
console.log("prop1" in obj); // True
console.log("prop3" in obj); // False
console.log(obj["prop1"]); // foo
console.log(obj["prop3"]); // undefined

// ! Сравнения двух объектов
const a = { a: 19 };
const b = { b: 19 };
console.log(a === b);

// ! Методы объекта
// ! Object.keys(obj), Object.values(obj), Object.entries(obj)
let user = {
  name: "John",
  age: 30,
};

console.log(Object.keys(user));
console.log(Object.values(user));
console.log(Object.entries(user));

let user1 = [
  [0, 2],
  [1, 3],
  ["vulgar", true],
];
console.log(Object.fromEntries(user1)); // {0: 2, 1: 3, vulgar: true}

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
    console.log(arguments);
  }
}
func2(5, 6, 7, 8, 9);

// ! Тема: разница между rest и spread операторами
func(1, 2, 3, 4, 5);

function func(a, b, ...rest) {
  console.log(a); // выведет 1
  console.log(b); // выведет 2
  console.log(rest); // выведет [3, 4, 5]
}

let s1 = [22, 33, 44];
let s2 = [55, ...s1, 66];
console.log(s2);
