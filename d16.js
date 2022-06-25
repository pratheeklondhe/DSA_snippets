class Queue {

  constructor() {
    this.data = [];
  }

  add(n) {
    this.data.unshift(n);
  }

  remove() {
    return this.data.pop();
  }

  peek() {
    return this.data[this.data.length - 1];
  }
}

function weave(q1, q2) {
  let q3 = new Queue();
  
  while(q1.peek() != undefined || q2.peek() != undefined){

    if(q1.peek() != undefined) {
      q3.add(q1.remove());
    }
    if(q2.peek() != undefined) {
      q3.add(q2.remove());
    }
  }

  return q3;
}

const q1 = new Queue();
const q2 = new Queue();

q1.add(10);
q1.add(11);
q1.add(12);
console.log(q1.data);

q2.add(100);
q2.add(110);
// q2.add(120);
console.log(q2.data);

console.log(weave(q1, q2));

