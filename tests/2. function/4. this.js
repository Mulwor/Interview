// Контекст
const obj1 = {
  bar: 1,
  foo() {
    return this.bar
  },
}
obj1.foo()

const _foo = obj1.foo
_foo()

// Пример с контекстом №1
const test = {
  prop: 42,
  func: function () {
    return this.prop
  },
}
console.log(test.func()) // 42

// Пример с привязкой контекста №2
let user = {
  firstName: "Вася",
}

function func() {
  alert(this.firstName)
}

let funcUser = func.bind(user)
funcUser() // Вася

// Пример с привязкой контекста №3
const person = {
  surname: "Старк",
  knows: function (what, name) {
    console.log(`Ты ${what} знаешь, ${name} ${this.surname}`)
  },
}
const john = {
  surname: "Сноу",
}

person.knows("все", "Бран") // Ты все знаешь, Бран Старк

person.knows.call(john, "ничего не", "Джон") // Ты ничего не знаешь, Джон Сноу
person.knows.apply(john, ["ничего не", "Джон"]) // Ты ничего не знаешь, Джон Сноу
person.knows.call(john, ...["ничего не", "Джон"]) // Ты ничего не знаешь, Джон Сноу

const bound = person.knows.bind(john, "ничего не", "Джон")
bound()

// Пример с привязкой контекста №4
var obj = { a: "Custom" }
var a = "Global"

function whatsThis() {
  return this.a //значение this зависит от контекста вызова функции
}

whatsThis() // 'Global'
whatsThis.call(obj) // 'Custom'
whatsThis.apply(obj) // 'Custom'

// Пример с привязкой контекста №5
function add(c, d) {
  return this.a + this.b + c + d
}

var object = { a: 1, b: 3 }

add.call(object, 5, 7) // 16 (1+3+5+7)
add.apply(object, [10, 20]) // 34 (1+30+10+20)
