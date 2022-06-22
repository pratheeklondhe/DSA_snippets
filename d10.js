// for n = 2, print PYRAMID pattern ' # '
//                                  '###'    



function pyramid(n) {
  let mid = n-1;
  
  for(let i=0; i<n; i++) {
  let k = '';
    for(let j=0; j<((2*n) - 1); j++) {
      if (j>=mid-i && j<=mid+i) {
        k += '#';
      } else {
         k += ' ';
      }
    }
    console.log(k);
    
  }
  
}

pyramid(3)