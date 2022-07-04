class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

class LinkedList {

  constructor() {
    this.head = null;
  }

  insertFirst(data) {
    this.head = new Node(data, this.head);
  }

  size() {
        let count=0, node=this.head;
        while(node) {
            count++;
            node = node.next;
        }
        return count;
  }

  getFirst() {
        return this.head;
  }

      getLast() {
        let node = this.head;

        while(node?.next) {
            node = node.next;
        }

        return node;
    }
  
}

let ll = new LinkedList();
console.log(ll.head);
ll.insertFirst('HI');
console.log(ll);
ll.insertFirst('HI Hello');
console.log(ll);