// SPIRAL MATRIX for N=4, print below
// [
//   [ 1, 2, 3, 4 ],
//   [ 12, 13, 14, 5 ],
//   [ 11, 16, 15, 6 ],
//   [ 10, 9, 8, 7 ]
// ]



function spiral(n) {
  let x = [];

  for(let i=0;i<n;i++) {
    x[i] = [];
  }

  let c=1, cs=0,ce=n-1,rs=0,re=n-1;

  while(cs<=ce && rs<=re) {

    for(let i=cs; i<=ce; i++) {
      x[rs][i] = c;
      c++;
    }rs++;

    for(let i=rs; i<=re; i++) {
      x[i][ce] = c;
      c++;
    }ce--;

    for(let i=ce; i>=cs; i--) {
      x[re][i] = c;
      c++;
    }re--;

    for(let i=re; i>=rs; i--) {
      x[i][cs] = c;
      c++;
    }cs++;
  }

  return x;
  
}

console.log(spiral(4));