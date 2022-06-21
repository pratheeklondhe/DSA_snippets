// for n = 2, print pattern '# '
//                          '##'
function kk(n) {
  let k = '';
  for (let i=0; i< n; i++){
      
    for(let j=0; j<n;j++){
      if (j>i) {
        k += ' ';
      }
      else {
        k += '#';
      }
    }
    k += '\n';
  }
  return k;
}

let res = kk(6);
console.log(res);