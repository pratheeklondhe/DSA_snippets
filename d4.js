// fizzbuzz problem
// print from 1 to n; If multiple of 3: print fizz,
//   if multiple of 5: print buzz, if multiple of both: print fizzbuzz

function k(n) {
  let arr = []
  for (let i=1; i<=n; i++) {
    let is3 = !(i%3);
    let is5 = !(i%5);
    let printable = i;

    if(is3 && is5) printable = 'fizzbuzz';
    else if(is3) printable = 'fizz';
    else if(is5) printable = 'buzz';

    arr.push(printable);
  }

  return arr;
}



let res = k(30);
console.log(res);