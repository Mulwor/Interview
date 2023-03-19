
// ! Как определить наличие свойства в объекте?
let value = {
    "prop1": "foo",
    "prop2": "bar"
}
console.log(obj.hasOwnProperty('prop1'))    // True 
console.log(obj.hasOwnProperty('prop3'))    // False
console.log('prop1' in obj);                // True
console.log('prop3' in obj);                // False
console.log(obj['prop1']);                  // foo
console.log(obj['prop3']);                  // undefined


// ! Сравнения двух объектов
const a = { a: 19 }
const b = { b: 19 }
console.log(a === b)


// ! Методы объекта 
// ! Object.keys(obj), Object.values(obj), Object.entries(obj)
let user = {
    name: "John",
    age: 30
};
  
console.log(Object.keys(user))
console.log(Object.values(user))
console.log(Object.entries(user))

let user1 = [[0, 2], [1, 3], ["vulgar", true]]
console.log(Object.fromEntries(user1))              // {0: 2, 1: 3, vulgar: true}
