// inputs: [1,2,3,4,5] and 2 --> outputs[[1,2], [3,4], [5]]
function k(arr, n) {
  let res = [];
  let temp=[];
  for (let i=1; i<=arr.length; i++) {
    
    temp.push(arr[i-1]);
    
    if((i%n) === 0 || i === arr.length) {
      res.push(temp);
      temp = [];
    }
  }
  return res;
}



let res = k([1,2,3,4], 5);
console.log(res);