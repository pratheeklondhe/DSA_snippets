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
      this.head = this.head?.next;
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
  
}

let ll = new LinkedList();
console.log(ll.head);
ll.insertFirst('HI');
console.log(ll);
ll.insertFirst('HI Hello');
console.log(ll);