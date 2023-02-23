// ! Primer 1

function sayHi() {
  console.log(name);
  console.log(age);
  var name = 'John'; // Undefined
  let age = 30; // Error
}

sayHi();

// ! Primer 2 - У варов нет области видимости блочной, он сразу дает число 3

for (var i = 0; i < 3; i++) {
  console.log('Итерируется' + i);
  setTimeout(() => console.log(i), 1);
}

for (let i = 0; i < 3; i++) {
  setTimeout(() => console.log(i), 1);
}

// ! Primer 3 - стрелочная функция, this
const shape = {
  radius: 10,
  diameter() {
    return this.radius * 2;
  },
  perimeter: () => 2 * Math.PI * this.radius,
};

console.log(shape.diameter());
console.log(shape.perimeter());

// ! Primer 5 - работа с объектом. При изменении объекта меняются значения всех указывающих на него ссылок.
let c = {
  greeting: 'Hey!',
};
let d;
d = c;
c.greeting = 'Hello!';
console.log(d.greeting);

class Chameleon {
  static colorChange(newColor) {
    this.newColor = newColor;
    return this.newColor;
  }

  constructor({ newColor = 'green' } = {}) {
    this.newColor = newColor;
  }
}

const freddie = new Chameleon({ newColor: 'pink' });
freddie.colorChange('orange');

function Person(firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
}

const person = new Person('John', 'Smith');
Person.getFullName = function () {
  return `${this.firstName} ${this.lastName}`;
};

console.log(person.getFullName());

function bark() {
  console.log('Woof!');
}

bark.animal = 'dog';

console.log(bark.animal);

// обратите внимание: код выполняется в нестрогом режиме
let greeting;
greetign = {}; // опечатка!
console.log(greetign);




function Person(firstName, lastName) {
    this.firstName = firstName
    this.lastName = lastName
  }
  
  const john = new Person("John", "Smith")
  const jane = Person("Jane", "Air")
  
  console.log(john)
  console.log(jane)


  