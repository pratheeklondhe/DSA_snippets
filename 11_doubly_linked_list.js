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

    get(index) {
        if (index > this.length - 1) {
            return undefined;
        }
        let temp;
        if (index < (this.length / 2)) {
            temp = this.head;
            for (let i = 0; i < index; i++) {
                temp = temp.next;
            }
        } else {
            temp = this.tail;
            for (let i = this.length - 1; i > index; i--) {
                temp = temp.prev;
            }
        }
        return temp;
    }

    set(index, val) {
      let temp = this.get(index);
      if (!temp) { return temp; };
      temp.val = val;
      return temp;
    }

    insert(index, val) {
      if (index === this.length) { return this.push(val)};
      let temp = this.get(index);
      if (!temp) { return temp; };
      let newNode = new Node(val);
      newNode.next = temp;
      newNode.prev = temp.prev;
      temp.prev.next = newNode;
      temp.prev = newNode;
      this.length++;
      return newNode;
    }

    remove(index) {
      if(index === 0) {return this.shift()};
      if(index === this.length - 1) {return this.pop()};
      let temp = this.get(index);
      if (!temp) { return temp; };

      temp.prev.next = temp.next;
      temp.next.prev = temp.prev;
      this.length--;
      return temp;
    }

}

    let list = new DoublyLinkedList();
    console.log(list);