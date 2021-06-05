class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

class SinglyLinkedList {
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
        } else if (this.length === 1) {
            this.head = null;
            this.tail = null;
        } else {
            let counter = 1;
            let temp = this.head;
            while (counter < this.length - 2) {
                temp = temp.next;
                counter++;
            }
            this.tail = temp;
            this.tail.next = null;
        }
        this.length--;
        return this;
    }
    ;
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
        if (this.length < 2) {
            return this.pop();
        }
        this.head = this.head.next;
        this.length--;
        return this;
    }

// Gets the node at a given index
    get(index) {
      if (index > this.length) {return null;};
      let temp = this.head, i = 0;
      while(i<index) {
        temp = temp.next;
        i++;
      }
      return temp;
    }

// Inserts a new Node at given index 
    insert(index, val) {
      if (index === 0) { return this.unshift(val);}
      if (index === this.length) { return this.push(val);}
      let i=0,temp = this.head,newNode = new Node(val);
      while(i<index - 1) {
        temp = temp.next;
        i++;
      }
      newNode.next = temp.next;
      temp.next = newNode;
      this.length++;
      return this;
    }

// Sets the given value at given index
    set(index, val) {
      if (index >= this.length) {return false;}
      let i=0,temp=this.head;
      while(i<index) {
        temp = temp.next;
        i++;
      }
      temp.val = val;
      return this;
    }
}

let list = new SinglyLinkedList();
// list.push('Hi')
// list.push('Hello1')
// list.pop();

// list.unshift(1);
// list.shift();

console.log(list);
