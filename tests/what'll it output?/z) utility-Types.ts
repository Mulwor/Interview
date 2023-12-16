// ! Utility [juː'tɪlətɪ] types - это встроенные типы, которые помогают
// ! как-то манипулировать типами


// * ================================ Record =====================================
// ! Record создает тип, который представляют объекты с заданными ключами и значениями. 
// ! Она позволяет определить тип объекта, где все ключи имеют один и тот же тип значения.

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
// ! Нужен для того, чтобы некоторые свойста в объекте или в массиве сделать опцианальными

type Test10 = Partial<{a: number; b: string}>;
type Test11 = Partial<[1, 2, 'asdf']>
type Test12 = Partial<number[]>     // * {number | undefined}[]
type Test13 = Partial<string>       // * string

interface Config {
  prop1: number;
  prop2: string;
  test: number[];
}

const baseConfig: Config = { prop1: 1, prop2: "2", test: [1]}

function extendConfig(override: Partial<Config>): Config {
  return {...baseConfig, ...override}
}

const result = extendConfig({ test: [1, 2, 3] });  // *const result: Config

// * ================================== Required ============================================
// ! Все свойста делает обязательными

type Test14 = Required<{a?: number; b: string | undefined | null}>;
// * Test14 = {a: number; b: string | undefined | null}
type Test15 = Required<[1 | undefined | null, 2?, "asdf"?]>
// * Test15 = [1 | undefined | null, 2, "asdf"]
type Test16 = Required<(number | undefined | null)[]>
// * Test16 = (number | null)[]
type Test17 = Required<string | undefined | null>
// * Test17 = string | null | undefined


// * ================================== Readonly ============================================
// ! Создает тип, свойства которых нельзя изменить

type Test18 = Readonly<{a: number; c: string; d: {e: string}}>
// * Test18 = {readonly a: number; readonly c: string; readredonly: {e: string}}
type Test19 = Readonly<number[]>
// * Test19 = readonly<number[]> 
type Test20 = Readonly<string>
// * Test20 = readonly<number[]> 


interface Todo {
  title: string;
}
const todo: Readonly<Todo> = {
  title: "Delete inactive users",
};
 
todo.title = "Hello";


// * ================================== Parameters ============================================
// ! Достает аргумент и создает тип кортежа(tuple), используемых в параметрах типа функции Type
// ! Кортеж представляет набор элементов, для которыз уже заранее известен тип. Они могут
// ! Хранить значения разных типов

type Test21 = Parameters<(a: number, b: number) => number>;
// * Test21 = [number, number]
type Test22 = Parameters<(a: number, b: string, c?: boolean) => void>;
// * Test22 = [a: number, b: string, c?: boolean | undefined]


const sumFunction = (a: string, b: string) => a + b;
type Test23 = Parameters<typeof sumFunction>
let myArray: Test23 = [ 'hello ', 'world' ];
sumFunction(...myArray)



// * ================================== ReturnType ============================================
// ! Достает значение, которое мы возвращаем. Используется в различных сторах
type Test24 = ReturnType<() => number>;
// * Test24 = number
type Test25 = ReturnType<(a: number) => string>
// * Test25 = string
type Test26 = Test24 & Test25

// ? import type { store } from './root';
// ? export type RootStore = ReturnType<typeof store.getState>
 


// * ================================== Awaited ============================================
// ! Awaited - позволяет получить тип, который будет возвращен после ожидания(awaiting) промиса.

// * Пример №1
type A = Awaited<Promise<string>>;
// ? type A = string
type B = Awaited<Promise<Promise<number>>>; 
// ? type B = number
type C = Awaited<boolean | Promise<number>>;
// ? type C = boolean | number


// * Пример №2
type NumberPromise = Promise<number>
type StringPromise = Promise<string>
type Test27= Awaited<NumberPromise>
type Test28 = Awaited<StringPromise>

const asyncFn = () => Promise.resolve({ prop1: 5, prop2: "test"} );

type AsyncFnReturnIncorrect = ReturnType<typeof asyncFn>
// ? AsyncFnReturnIncorrect = Promise<{ prop1: number; prop2: string; }>
type AsyncFnReturn = Awaited<ReturnType<typeof asyncFn>>;
// ? AsyncFnReturn = Promise<{ prop1: number; prop2: string; }>


// * Пример №3
function asyncNumber(): Promise<number> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(42);
    }, 1000);
  });
}
type ResultType = Awaited<ReturnType<typeof asyncNumber>>;

async function main() {
  const result: ResultType = await asyncNumber();
  console.log(result.toFixed(2)); 
}
