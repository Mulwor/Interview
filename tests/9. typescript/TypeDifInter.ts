// * Если у нас есть тип и интерфейс, то интерфейс может наследоваться от типа, а тип через extends не может наследоваться. 
type one = {
  name: string
}
interface two extends one {}
type three extends one


// * Если мы хотим взять какой-то примитивный тип у type, то внутри interface мы можем обратится к типу объявленный через type 
type UniqueId = string;
interface User {
    id: UniqueId
}

// * Если у нас есть два типа, то мы можем объединить через | (палочку), у интерфейса такой функции нету. 
type A = {
    age: number
}
type B = {
    name: string
}
type C = A | B

interface D extends A, B {}
const obj: C = {
    age: 23,
    name: "5"
}


// * Типы с одинаковыми именами мы не можем писать, так как будет ругаться, а вот интерфейс можно и тем самым мы можем их расшираять
type four = {}
type four = {}
interface five {}
interface five {}
interface five {}