// ! Utility [juː'tɪlətɪ] types - это встроенные типы, которые помогают
// ! как-то манипулировать типами


// * ================================ Record =====================================
// ! Record - представляет из себя объект с определенным набором ключей
// ! и значений. Первое значение определяет возможные ключи объекта, а второе
// ! значение соответствующие каждому ключу

type Fruit = "apple" | "banana" | "orange"
type FruitInfo = Record<Fruit, number>
// * Эквивалент: { [key: string]: number }

const fruitCount: FruitInfo = {
  apple: 5,
  banana: 3,
  orange: 8,
}

console.log(fruitCount.apple) // * Output: 5



// * ================================== Pick ===================================
// ! Pick - cоздает тип, выбирая набор свойств из другого типа

type Person = {
  name: string
  age: number
  email: string
  address: string
}

//* Выбираем только некоторые свойства из типа Person
type PersonSummary = Pick<Person, "name" | "age">
// * Эквивалент:
// ?  type MyPick<T, K extends keyof T> = {,    * T - исходный тип, К - ключи которые хотим взять у K
// ?      [key in K]: T[key]                    * перебор свойств из К с помощью индекса по типу значения
// ?  }

const person: PersonSummary = {
  name: "Alice",
  age: 30,
}

console.log(person.name)                        // * Output: 'Alice'



// * ================================== Omit ===================================
// ! Omit - создает тип, исключая набор свойств из другого типа

interface User {
  id: number
  name: string
  age: number
  email: string
  isAdmin: boolean
}

type EditableUserProfile = Omit<User, "id" | "isAdmin">
// * Эквивалент: type EditableUserProfile<T, K> = { [key in keyof T as key extends K ? never : key]: T[key] };

const userProfile: EditableUserProfile = {
  name: "John Doe",
  age: 30,
  email: "john.doe@example.com",
}



// * ================================== Extract<Type, Union> ===================================
// ! Создает тип, выбирая набор свойств из другого типа с union type (объединением стилей)

type TestExtract = string | number | boolean
type TestExtract2 = "test" | "test2" | 1 | 2 | false

type Test1 = Extract<TestExtract, string>            // ? Test1 = string
type Test2 = Extract<TestExtract2, string>           // ? Test2 = "test", "test2"
type Test3 = Extract<TestExtract2, "test" | number>  // ? Test3 = "test" | 1 | 2



// * ================================== Exclude<UnionType, ExcludedMembers> ===================
// ! Создает тип, исключая набор свойств из другого типа с union type (объединением стилей)

type TestExclude = string | number | boolean
type TestExclude2 = "test" | "test2" | 1 | 2 | false

type Test4 = Exclude<TestExclude, string>            // ? Test1 = number, boolean
type Test5 = Exclude<TestExclude2, string>           // ? Test2 = false | 1 | 2
type Test6 = Exclude<TestExclude2, "test" | number>  // ? Test3 = false | "test2"



// * ================================== NonNullable ============================================
// ! Создает тип, исключая набор свойств из другого типа null и undefined с union type (объединением стиля)

type TestNonNullable = string | number | boolean | undefined | null
type TestNonNullable2 = "test" | "test2" | 1 | 2 | false | undefined | null

type Test7 = NonNullable<TestNonNullable>                     // ? Test1 = string | number | boolean
type Test8 = NonNullable<TestNonNullable2>                    // ? Test2 = false | 1 | "test" | "test2" | 2
type Test9 = Exclude<TestNonNullable2, null | undefined>      // ? Test3 = false | 1 | "test" | "test2" | 2



// * ================================== Partial ============================================


// * ================================== Required ============================================


// * ================================== Readonly ============================================


// * ================================== Parameters ============================================


// * ================================== ReturnType ============================================


// * ================================== Awaited ============================================
// ?

// ?
