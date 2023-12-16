// * 1. В чем разница между process1 / process2
// * Представим себе, что каждый из экщенов выполняется по 10секунд, какой из экшенов выполнится (завершится) раньше и почему.

type action = () => Promise<string>

async function process1(action1: action, action2: action, action3: action): Promise<string[]> {
  const res1 = await action1();
  const res2 = await action2();
  const res3 = await action3();

  return [res1, res2, res3]
}

async function process2(action1: action, action2: action, action3: action): Promise<string[]> {
  return Promise.all([action1(), action2(), action3()])
}

// ? 1.  Первое: await и Promise all; 

// ? Async является еще одним способом написание ассинхроного кода, который всегда возвращает промис,  
// ? await добавляется в тело функции и ждет выполнения промиса. Если какой-то из await не выполнится,
// ? то дальше он не пойдет и поместится в catch, что тот в свою очередь является обработчиком ошибок 

// ? `Promise.all()` - ждет выполнения всех промисов, если выполнятся успешно то вернет массив значений 
// ? этих промисов, если нет, то вернет последний промис, который выполнился неуспешно

// ? 2. Process2 => выполнится быстрее так как все 3 экшена будут запушены паралельно и одновременно ждать их 
// ? завершения, а process1 пока не выполнится res1, он не перейдет к следующему.



// * 3. Разробчик отправил на ревью, но убрал resolve. Вопрос: когда начнется action3 и начнется ли он?

const action2 = () => new Promise((res, rej) => {
    // res("SUCCESS")
});

async function process1(action1: action, action2: action, action3: action): Promise<string[]> {
  const res1 = await action1();
  const res2 = await action2();
  const res3 = await action3();

  return [res1, res2, res3]
}

// ? Никогда не выполнится, так как у экщена2 нет не респонса не реджека и согласно этому к res3 не перейдет




// * 4 Попросили подправить код и он подправил, однако вместо резолва у него теперь речект и асинк убрал 
// * Process1 - завершится или нет, и что будет результатом

const action2 = () => return new Promise((res, rej) => {
   rej("SUCCESS")
});

async function process1(action1: action, action2: action, action3: action): Promise<string[]> {
  const res1 = await action1();
  const res2 = action2();
  const res3 = await action3();

  return [res1, res2, res3]
}

// ! Он завершится и вернет значения [res1, res2 ("Success"), res3]


// * 5. Необходимо написать функцию для слипа (sleep), чтобы он выполнился через 300 миллисекнуж после process1

const action2 = () => return new Promise((res, rej) => {
   res("SUCCESS")
})

async function process1(action1: action, action2: action, action3: action): Promise<string[]> {
  const res1 = await action1();
  const res2 = await action2();
  const res3 = await action3();

  return [res1, res2, res3]
}

function sleep(time) {
   return new Promise((resolve) => setTimeout(resolve, time))
}

const superProcess = async () => {
  await process1{...}
  await sleep(300)
  await process2{...}
}
