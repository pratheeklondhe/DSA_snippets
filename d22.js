class Node {

  constructor(data) {
    this.data = data;
    this.children = [];
  }

  addChildren(data) {
    this.children.push(new Node(data));
    return this;
  }

  removeChildren(data) {
    this.children = this.children.filter(child => 
    child.data !== data);
  }
}

class Tree {

  constructor(data) {
    this.root = new Node(data);
  }

  traverseBF(fn) {

    let arr = [this.root];
    while(arr.length) {
      const node = arr.shift();
      arr.push(...node.children);
      fn(node);
    }
  }

  traverseDF(fn) {

    let arr = [this.root];
    while(arr.length) {
      const node = arr.shift();
      arr.unshift(...node.children);
      fn(node);
    }
  }

  
}

const tree = new Tree('N1');
tree.root.addChildren('N2')
.addChildren('N3').addChildren('N4');

tree.root.children[0].addChildren('N5')
.addChildren('N6');

tree.root.children[2].addChildren('N7')
  .addChildren('N8').addChildren('N9').addChildren('N10')

tree.traverseBF((node) => {
  console.log(node.data);
});

tree.traverseDF((node) => {
  console.log(node.data);
});