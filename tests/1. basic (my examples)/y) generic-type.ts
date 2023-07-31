// ! Example #1
function exapmleWithoutGeneric(arg: number): number {
  // * function identity(arg: any): any {
  return arg
}

function identity<Type>(arg: Type): Type {
  return arg
}
let output = identity<string>("myString")

// * ====================================================

// ! Example #2
const idWrong = (item: unknown) => item
// ? let resultWrong : wrong
let resultWrong = idWrong(5)

const id = <T>(item: T) => item
// ? let result: number
let result = id(5)

// * ====================================================

// ! Example #3

function loggingIdentity<Type>(arg: Type): Type {
  console.log(arg.length)
  //  *  Property 'length' does not exist on type 'Type'.
  return arg
}

function loggingIdentity1<Type>(arg: Type[]): Type[] {
  console.log(arg.length)
  return arg
}

function loggingIdentity2<Type>(arg: Array<Type>): Array<Type> {
  console.log(arg.length)
  return arg
}

// * ====================================================

// ! Example #4

interface Lengthwise {
  length: number
}

function loggingIdentity4<Type extends Lengthwise>(arg: Type): Type {
  console.log(arg.length)
  return arg
}

// * Поскольку универсальная функция теперь ограничена, она больше не будет работать со всеми типами:
loggingIdentity4(3);
// * Вместо этого нам нужно передать значения, тип которых имеет все необходимые свойства:
loggingIdentity({ length: 10, value: 3 });

// * ====================================================

// ! Example #5

function withCharCodesWrong<T>(value: T) {
  const charCodes: number[] = []

  for (let i = 0, l = value.length; i < l; i++) {
    charCodes.push(value.charCodes(i))
  }

  return [value, charCodes] as const
}
const [str, charCodes] = withCharCodesWrong("asdf" as const)
withCharCodesWrong(["asdf", "test"])

function withCharCodes<T extends string>(value: T) {
  const charCodes: number[] = []

  for (let i = 0, l = value.length; i < l; i++) {
    charCodes.push(value.charCodeAt(i))
  }

  return [value, charCodes] as const
}
withCharCodes("asd")
withCharCodes(["asdf", "test"])

// * ====================================================

// * Необходимо использовать более узкие дженереки
function pushArrayIncorrect<T extends unknown[]>(arr: T, item: T[number]) {
  arr.push(item)
  return arr
}

function pushArray<T>(arr: T[], item: T) {
  arr.push(item)
  return arr
}

pushArray([1, 2, 3, 4], 5)
pushArrayIncorrect([1, 2, 3, 4], 5)
