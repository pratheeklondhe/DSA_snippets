class Stack {

  constructor() {
    this.data = [];
  }

  push(n) {
    this.data.push(n);
    return this;
  }

  pop() {
    return this.data.pop();
  }

  peek() {
    return this.data[this.data.length - 1];
  }
}

let s = new Stack();

s.push(10);
s.push(11);
// s.push(13);
console.log(s.peek());

