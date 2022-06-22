// for n = 2, print PYRAMID pattern ' # '
//                                  '###'    
//  USING RECURSION


function k(n) {
   let mid = n-1;
  function pyramid(i) {

    if (i === n) return;
    
    let k = '';
    for(let j=0; j<((2*n) - 1); j++) {
      if (j>=mid-i && j<=mid+i) {
        k += '#';
      } else {
         k += ' ';
      }
    }
    console.log(k);

    pyramid(i+1);
  
}
  pyramid(0);
}


k(3)