class LinkedListNode {
  constructor(value, next = null) {
    this.value = value;
    this.next = next;
  }
  
  toString() {
    return `${this.value}`
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  // Append - добавляет в конец нашего списка еще один элемент
  append(value) {
    const newNode = new LinkedListNode(value);

    // Если элементов в нашем списке нет, то добавляем его
    if (!this.head || !this.tail) {
      this.head = newNode;
      this.tail = newNode;
      
      return this;
    }
    
    // Однако если они есть, то: 
    this.tail.next = newNode;
    this.tail = newNode;
    return this;
  }
}

const list = new LinkedList();
list.append("a").append("b").append("c")
console.log(JSON.stringify(list))
// { "head": {"value":"a", "next": {"value":"b", "next":{"value":"c", "next":null}}},
// "tail":{"value":"c","next":null}}
