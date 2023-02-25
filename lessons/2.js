class User {
  // * 3. В свойства можно сразу записать какое-нибудь значение
  firstName = 'Jack';

  // *4. Конструктор – это специальный метод, который вызывается при создании объекта, он также
  // * может принимать в себя некоторые аргументы. Внутри него можно также передавать параметры
  constructor(name, surn) {
    console.log("Вызов конструктора: ")  
    console.log(name + ' ' + surn);
  }

  show() {
    // * 1. this - будет указывать на объект класса, что также означает мы можем обращатся
    // * к свойству объект
    console.log(this);                      // Ссылка на объект
    console.log(this.name);                 // Ссылка на значение
  }

  // *2. Одни методы можно вызывать внутри других через this.
  show1() {
    // return this.name
    console.log(this.cape(this.name));
  }
  cape(str) {
    return str[0].toUpperCase() + str.slice(1);
  }
}

let user = new User("Jack", "Dickeldson");          // * 5. Работа с конструкторам
user.name = 'john';
user.show();                                        // * выведет 'john'
user.show1();
console.log(user.firstName);                        // * "Jack"
