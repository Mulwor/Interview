// ! Type guard (определение №1)
// ? Type guard - runtime проверка, которая дает метаинформацию Тайпскрипту (его компилятору)
// ? Если это проверка проходит, то ТС знает, что у нас более суженный тип кода значения. Если
// ? Это проверка не подходит то типизация остается точно такая же.

// ? В данном примере type guard явялется typeof
function logId(id: string | number) {
  if (typeof id === "string") {
    id
  } else {
    id
  }
}

// ? Является ли это значение - truthy
function test(value: unknown) {
  if (value) {
    value
    // ? value: {}, кроме null/undefined
  } else {
    value
    // ? value: unknown
  }
}

function test2(value: unknown) {
  if (typeof value === "string") {
    value 
    // ? value: string
  } else {
    value 
    // ? value: unknown
  }
}

function test3 (value: unknown) {
  if (value !== undefined && value !== null) {
    value;              
    // * (parameter) value: {}
  } else {
    value;
    // * (parametr) value: null | undefined
  }
}

// * Проверяет есть какой ключ и он находится в объекте
function test4 (value: object) {
  if ('key' in value) {
    value
    // * (parameter) value: object & Record <"Key", unknown>
  } else {
    value
     
  }
}


// * Когда нужно использовать type guard (1)
// ? Когда мы не уверены в том какой тип возвращает источник информации - JSON parse
// ? Когда нам нужно сузить тип какого-то значения. Например нам передается текст либо undefined
// ? и нужно проверить если вам не был передан текст, а был передан undefined вы возвращается вообще
// ? ничего
interface SomeComponentProps {
  text?: string
}

const SomeComponent = (props: SomeComponentProps) => {
  if (typeof props.text === "undefined") {
    return null
  }

  const text = props.text //* const text: string

  return {
    //* <p> Here is the text: <br /> {text} </p>
  }
}

// * Когда нужно использовать type guard (2)
// ? Когда мы работаем со стороними источниками данных и нам нужно обязательно
// ? проверить наши переменные, наши значения на типизацию
const getSavedName = () => {
  const name = localStorage.getItem("name") // ? const name: string | null

  // * Если name - является наллом, то мы должны вернуть undefined (первое сужение)
  if (name === null) {
    return
  }

  // * const name: string
  name

  // * сonst parsedName: any. В рантайме может быть передана любая строка: JSON строка массивов, объектов и т.д.
  const parsedName = JSON.parse(name)

  // * Если у нас тип не строка
  if (typeof parsedName !== "string") {
    return
  }

  // * const parsedName: string
  return parsedName
}

console.log("===========================================")
