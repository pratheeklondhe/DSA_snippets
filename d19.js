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

  clear() {
    this.head = null;
  }

  removeFirst() {
        this.head = this.head?.next;
    }

  removeLast() {
        if (!this.head) return;
        if(!this.head.next){
            this.head = null;
            return;
        }
        
        let node = this.head;

        while(node.next?.next) {
            node = node.next;
        }

        node.next = null;
        
    }
  
}

let ll = new LinkedList();
console.log(ll.head);
ll.insertFirst('HI');
console.log(ll);
ll.insertFirst('HI Hello');
console.log(ll);