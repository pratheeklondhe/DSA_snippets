class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
        this.prev = null;
    }
}

class DoublyLinkedList {
    constructor() {
        this.length = 0;
        this.head = null;
        this.tail = null;
    }

    push(val) {
      let newNode = new Node(val);
      if (!this.length) {
        this.head = newNode;
        this.tail = newNode;
      } else {
        this.tail.next = newNode;
        newNode.prev = this.tail;
        this.tail = newNode;
      }
      this.length++;
      return this;
    }

    pop() {
      if (!this.length) { return false;}
      if (this.length === 1) {
        this.head=null;
        this.tail=null;
      } else {
      this.tail = this.tail.prev;
      this.tail.next = null;
      }
      this.length--;
      return this;
    }

    shift() {
      if (!this.length) { return undefined;}
      if (this.length === 1) {
        return this.pop();
      }
      this.head = this.head.next;
      this.head.prev = null;
      this.length--;
      return this;
    }

    unshift(val) {
      if (!this.length) { return this.push(val);}
      let newNode = new Node(val);
      this.head.prev = newNode;
      newNode.next = this.head;
      this.head = newNode;
      this.length++;
      return this;
    }


}

    let list = new DoublyLinkedList();
    console.log(list);