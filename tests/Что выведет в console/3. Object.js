// ! Задача №

let c = { greeting: "Hey!" }
let d

d = c
c.greeting = "Hello!"
console.log(d.greeting)

// ! Задача №
const shape = {
  radius: 10,
  diameter() {
    return this.radius * 2
  },
  perimeter: () => 2 * Math.PI * this.radius,
}

console.log(shape.diameter())
console.log(shape.perimeter())


// ! Задача №
function getAge(...args) {
  console.log(typeof args)
}
getAge(30)