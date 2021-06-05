class Node{
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class SinglyLinkedList{
  constructor() {
    this.length = 0;
    this.head = null;
    this.tail = null;
  }

  push(val) {
    let newNode = new Node(val)
    if (!this.length) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }

  pop() {
    if (!this.length) {
      return false;
    }
    let counter = 1;
    let temp = this.head;
    while(counter < this.length - 1) {
      temp = temp.next;
      counter++;
    }
    this.tail = temp;
    this.tail.next = null;
    this.length--;
    return this;
  };

// Adds an element at the beginning
  unshift(val) {
    if (!this.length) {
      return this.push(val);
    }
    let newNode = new Node(val);
    newNode.next = this.head;
    this.head = newNode;
    this.length++;
    return this;
  }

// Removes an element from beginning
  shift() {
    if (this.length<2) {return this.pop();}
    this.head = this.head.next;
    this.length--;
    return this;
  }
}

let list = new SinglyLinkedList();
// list.push('Hi')
// list.push('Hello1')
// list.pop();

console.log(list);