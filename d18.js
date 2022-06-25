// Implement Queue from Two Stacks !!

const Stack = require('./d17');

class QueueFromTwoStacks {
  constructor() {
    this.s1 = new Stack();
    this.s2 = new Stack();
  }

  add(n) {
    this.s1.push(n);
  }

  remove() {
    while (this.s1.peek() !== undefined) {
      this.s2.push(this.s1.pop());
    }

    const res = this.s2.pop();
    while (this.s2.peek() !== undefined) {
      this.s1.push(this.s2.pop());
    }
    return res;
  }

    peek() {
    while (this.s1.peek() !== undefined) {
      this.s2.push(this.s1.pop());
    }

    const res = this.s2.peek();
    while (this.s2.peek() !== undefined) {
      this.s1.push(this.s2.pop());
    }
    return res;
  }
}


const qfs = new QueueFromTwoStacks();
qfs.add(10);
qfs.add(11);
qfs.add(1);
qfs.add(2);
console.log(qfs.peek());
qfs.remove();
console.log(qfs.peek());
qfs.remove();
console.log(qfs.peek());