// Binary Seacrh tree implementation

class Node {

  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }

  insertNode(data) {
    if(data < this.data && this.left) {
      this.left.insertNode(data);
    } else if(data < this.data) {
      this.left = new Node(data)
    } else if(data > this.data && this.right) {
      this.right.insertNode(data);
    } else if(data > this.data) {
      this.right = new Node(data);
    }

    return this;
  }

  contains(data) {

    if(data === this.data) {
      return this;
    } else if(data < this.data && this.left) {
      return this.left.contains(data);
    } else if(data > this.data && this.right) {
      return this.right.contains(data);
    }

    return null;
  }
}

const node = new Node(20);
node.insertNode(15)
  .insertNode(25)
  .insertNode(10)
  .insertNode(30)
  .insertNode(24);

console.log(node);
console.log(node.contains(20));