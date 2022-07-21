// Rsturn an array of levels at each Breadth

const tree = require('./d22');

function computeBLevel(tree) {

  const token = 'T';
  let arr = [tree.root, token];
  let res = [0];

  while(arr.length > 1) {
    let node = arr.shift();

    if(node === token) {
      res.push(0);
      arr.push(token);
    } else {
      arr.push(...node.children);
      res[res.length -1]++;
    }
  }


  return res;
}

console.log(computeBLevel(tree));