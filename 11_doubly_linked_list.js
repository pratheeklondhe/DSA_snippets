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


}

    let list = new DoublyLinkedList();
    console.log(list);