// ! Задача №
function sum(a, b) {
  return a + b
}

console.log(sum(1, "2"))

// ! Задача №
function bark() {
  console.log("Woof!")
}
bark.animal = "dog"

console.log(bark.animal)

// ! Задача № 0.5
function Person(firstName, lastName) {
  this.firstName = firstName
  this.lastName = lastName
}

const person = new Person("John", "Smith")
Person.getFullName = function () {
  return `${this.firstName} ${this.lastName}`
}

console.log(person.getFullName())

// ! Задача №
function Person(firstName, lastName) {
  this.firstName = firstName
  this.lastName = lastName
}

const john = new Person("John", "Smith")
const jane = Person("Jane", "Air")

console.log(john)
console.log(jane)

// ! Задача №
function getPersonInfo(one, two, three) {
  console.log(one)
  console.log(two)
  console.log(three)
}

const persons = "John"
const age = 30

getPersonInfo`${persons} is ${age} years old`

// ! Задача №
function checkAge(data) {
  if (data === { age: 18 }) {
    console.log("Ты взрослый!")
  } else if (data == { age: 18 }) {
    console.log("Ты по-прежнему взрослый.")
  } else {
    console.log("Хм... У тебя что, нет возраста?")
  }
}

checkAge({ age: 18 })
