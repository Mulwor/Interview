//! Есть ли в тс сделать 1 интерфейс из другого, чтобы таким образом все свойства обязательными стали необязательными
interface Cat {
  name: string
  age: number
}

interface BrCat {
  name: string
  age: string
}
// ? - Через Утилиту - Partial