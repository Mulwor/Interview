class HashTable {
  // Создаем массив определенной длины - это 10
  store = new Array(10);

  hash(key) {
    let sum = 0;
    for (let i = 0; i < key.length; i++) {
      sum += key.charCodeAt(i);
    }
    return sum;
  }

  // Положить по какому-то ключу и значению
  add(key, value) {
    this.store[this.hash(key)] = value;
  }

  // А потом по этому ключу достать
  get(key) {
    return this.store[this.hash(key)]
  }
}