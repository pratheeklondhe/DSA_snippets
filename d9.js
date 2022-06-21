// for n = 2, print pattern '# '
//                          '##'    USING RECURSION



function k(n) {

  function recur(i) {
    if(i === n) return;
    let x='';

    for (let j=0; j<n; j++) {
      if(j>i) x += ' ';
      else x += '#';
    }

    console.log(x);
    recur(i+1)
  }

  recur(0);
}

let res = k(6);
console.log(res);