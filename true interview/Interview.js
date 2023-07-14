// ! 1. Задача на логику

// * 1.1. У нас есть сейф, у него 4 кодовый замок от 0 до 9. Вопрос: за сколько
// * мы сможем открыть сейф

// * 1.2. Мы пошли в магазин и решили купить бутылку вина с пробкой. Однако без пробки она
// * стоит в 10 раз дороже. Вопрос: сколько стоит пробка. Ответ не 1

// ! 2. Секция JavaScript

// * 2.1. Напиши все возможные варианты заклонить к себе объект

const people = {
  name: "Valera",
  surname: "Valerovich"
}

// * 2.2. Будет ли переменная b одинакого переменной, то есть будут ли они визуально они одинаковые или разные
// * 2.3. Что выведется в консоль
// * 2.4. Как сделать так чтобы сработало сортировка
const a = [10, 8, 2, 1, 5, 7, 4, 9]
const b = a.sort()



// * 2.5. У нас есть массив чисел, необходимо посчитать их однако число должно начинаться не с 0, а с -1
const digits = [1, 2, 3, 4]     // ? 1 + 2 + 3 + 4 = 10
digits.reduce((a, b) => a + b, -1)



// * 2.6. У нас есть массив повторяющих значений, как из него убрать все повторяющиеся значения. То есть сделать
// * из повторяющихся значений не повторяющие.
const names = ['Vasya', 'Masha', 'Vasha', ...];


// ! 3. Cекция JavaScript+ 

// * 3.1. В чем разница между process1 / process2
// * 3.2. Представим себе, что каждый из экщенов выполняется по 10секунд, какой из экшенов выполнится (завершится) раньше и почему.

type Action = () => Promise<string>

async function process1(action1: Action, action2: Action, action3: Action): Promise<string[]> {
  const res1 = await action1();
  const res2 = await action2();
  const res3 = await action3();
    
  return [res1, res2, res3]
}

async function process2(action1: Action, action2: Action, action3: Action): Promise<string[]> {
  return Promise.all([action1(), action2(), action3()])
}

// * 3.4. Разробчик отправил на ревью, но убрал resolve. Вопрос: когда начнется action3 и начнется ли он?

type Action = () => Promise<string>

const action2 = () => return new Promise((res, rej) => {
    // res("SUCCESS")
})

async function process1(action1: Action, action2: Action, action3: Action): Promise<string[]> {
  const res1 = await action1();
  const res2 = await action2();
  const res3 = await action3();
    
  return [res1, res2, res3]
}

async function process2(action1: Action, action2: Action, action3: Action): Promise<string[]> {
  return Promise.all([action1(), action2(), action3()])
}


// * 3.5 Попросили подправить код и он подправил, однако вместо резолва у него теперь речект
// * Однако он поправил на речект так еще и асинк убрал, что случится с process1
// * Под.вопрос: process1 - завершится или нет?
// * Под.вопрос: что будет результатом
// * Под.вопрос: необходим назвать тип каждой переменной

type Action = () => Promise<string>

const action2 = () => return new Promise((res, rej) => {
   rej("SUCCESS")
})

async function process1(action1: Action, action2: Action, action3: Action): Promise<string[]> {
  const res1 = await action1();
  const res2 = action2();
  const res3 = await action3();
    
  return [res1, res2, res3]
}


// * 3.5. Необходимо написать функцию для слипа (sleep), чтобы он выполнился через 300 миллисекнуж после process1


type Action = () => Promise<string>

const action2 = () => return new Promise((res, rej) => {
   res("SUCCESS")
})

async function process1(action1: Action, action2: Action, action3: Action): Promise<string[]> {
  const res1 = await action1();
  const res2 = await action2();
  const res3 = await action3();
    
  return [res1, res2, res3]
}

const superProcess = async () => {
  await process1{...}
  await sleep(300)
  await process2{...}
}

// ! 4. Секция TS - есть ли в тс сделать 1 интерфейс из другого, чтобы таким образом все свойства обязательными стали необязательными
interface Cat {
  name: string;
  age: number;
}

interface BrCat {
  name: string;
  age: string;
}

// ! 5. Дата - какая дата выведется в консоль лог?

const year = Date.getYear();    // 
const month = Date.getMonth();  //
const day = Date.getDay();      // 

yyyy-MM-DD

// ! 6. Реализуй жизненный цикл в хуке useEffect() когда он монтируется и размонтируется. 
// ! И если мы в зависимости будем передавать show и count, то когда будет рендерится наш компонент