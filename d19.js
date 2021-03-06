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
    // this.head = new Node(data, this.head);
    this.insertAt(data, 0);
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
    // return this.head;
    this.getAt(0);
  }

      getLast() {
        let node = this.head;

        while(node && node.next) {
            node = node.next;
        }

        return node;
    }

  clear() {
    this.head = null;
  }

  removeFirst() {
    // this.head = this.head?.next;
    this.removeAt(0);
        
    }

  removeLast() {
        if (!this.head) return;
        if(!this.head.next){
            this.head = null;
            return;
        }
        
        let node = this.head;

        while(node.next && node.next.next) {
            node = node.next;
        }

        node.next = null;
        
    }

      insertLast(data) {
        let last = this.getLast();
        if(last) {
            last.next = new Node(data)
        } else {
            this.insertFirst(data)
        }
    }

  getAt(n) {
    let node = this.head;

    while(n && node) {
      node = node.next;
      n--;
    }

    return node;
  }

  removeAt(n) {
    if(n === 0) {
      this.head = this.head ? this.head.next : null;
      return;
    }

    let node = this.getAt(n-1);
    if(!node) return;
    node.next = node.next ? node.next.next : null;
  }

  insertAt(data, n) {
    if(n===0) {
      this.head = new Node(data, this.head);
      return;
    }

    let node = this.getAt(n-1);
    if(!node) return;
    node.next = new Node(data, node.next);
  }

    forEach(fn) {
    let n=0, node = this.head;

    while(node) {
      
      fn(node, n);
      n++;
      node = node.next;
    }
  }
  
}

let ll = new LinkedList();
ll.insertFirst('4');
ll.insertFirst('3');
ll.insertFirst('2');
ll.insertFirst('1');
ll.insertFirst('0');


module.exports = ll;
// console.log(JSON.stringify(ll));