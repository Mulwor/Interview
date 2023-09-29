// * Типа в TS
let one: number = 10
let two: string = "hello world"
let three: boolean = true

// * Array
let four: number[] = [1, 2, 3]
let five: Array<number> = [4, 5, 6]
interface User {
  name: string
  age: number
}
let arr: User[] = []
arr.push({ name: "john", age: 30 })

// * Object
interface Person {
  name: string
  age?: number
}

function greet(person: Person) {
  return "Hello " + person.name
}

// ==================================================================================
// ? Отличие any / unknown
// * Any - может компилироваться в любой тип, что не приведет к ошибки
// * По своей сути - это как писать на чистом JS. Если мы не напишем никакой тип
// * то он преобразуется в any
function sum(a, b: any) {
  return a + b
}

// * Мы можем назначить любой тип после того как указали any и оно будет работать
let checkAny: any = 10
let s1: string = checkAny
checkAny.method()

// * Unknown - более безопасный и работает по тому же принципу (может быть любым типом), однако
// * Мы не можем присвоить ему другой тип без явного утверждение и вызвать мы его конечно не можем
let checkUnknown: unknown = 10
let s2: string = checkUnknown
let s3: string = checkUnknown as string
checkUnknown.method()

function processValue(value: unknown) {
  if (typeof value === "string") {
    // Теперь TypeScript знает, что value - это строка, и позволяет выполнять операции со строками.
    console.log(value.toUpperCase())
  } else {
    console.log("Value is not a string.")
  }
}
processValue(123)

function testUnknown(argument: unknown) {
  if (typeof argument === "number") {
    console.log(argument + 5)
  }
  if (typeof argument === "string") {
    console.log(argument.charCodeAt(0))
  }
  if (Array.isArray(argument)) {
    console.log(argument.concat([1, 2, 3]))
  }
  if (typeof argument === "object" && argument !== null) {
    console.log({ ...argument })
  }
}

// ==================================================================================

// ? Отличие void / never

// ? Never: 
// * Пример №1: мы не можем присовить ему другое значнеие
let anyVar: any
let neverVar: never
never = anyVar

// * Пример №2
type Bird = { kind: "bird"; legs: number; wings: 2 }
type Dog = { kind: "dog"; legs: number }
type Fish = { kind: "fish"; fins: number }
type Animals = Bird | Dog | Fish

function animalAppendages(animal: Animals): number {
  switch (animal.kind) {
    case "bird":
      return animal.wings + animal.legs
    case "dog":
      return animal.legs + 1
    case "fish":
      return animal.fins
    default:
      // * Если удалить fish, то будет: Type 'Fish' is not assignable to type 'never'.
      let neverHappens: never = animal
      return neverHappens
  }
}

// * Пример №3
type CurrencyOptions = "CAD" | "USD"

function getRate(rate: CurrencyOptions) {
  if (rate === "CAD") {
    return 1.3
  } else if (rate === "USD") {
    return 1
  }
  // * Если добавить в тип еще один элемент, то type 'string' is not assignable to type 'never'
  const neverEver: never = rate
  return neverEver
}

// * Пример №4
function exapmple3() {
  const test = () => {
    throw new Error("test")
  }

  const a: never = test()
  console.log(a)
}

// * Пример №5
function exhausetiveCheck(value: never) {
  return value
}
interface State {
  count: number
}
type Actions = { type: "increment"; payload: number } | { type: "decrement"; payload: number }

function reducer(state: State, action: Actions): State {
  const { type, payload } = action
  switch (type) {
    case "increment":
      return {
        ...state,
        count: state.count + payload,
      }
    case "decrement":
      return {
        ...state,
        count: state.count - payload,
      }
    default:
      return exhausetiveCheck(type)
  }
}


// ? Void

function example1(): void {
  console.log('test')
}
function example2(): void {
  console.log("test")
  return undefined
}