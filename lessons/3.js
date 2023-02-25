class User {
  // * 1. Cуществует как публичные свойства объекта, так и приватные. Публичные те которые мы
  // * можем прочитать из вне. Приватные те, которые доступны внутри класса. Синтаксис: #
  #surname;

  constructor(name, surn) {
    this.name = name;
    this.surn = surn;
    // this.#surname = surname;
  }

  show() {
    return this.name + ' ' + this.surn;
  }
}

let user = new User('john', 'smit');
console.log(user.show());

// Урок №14