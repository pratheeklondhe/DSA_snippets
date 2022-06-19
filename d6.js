// Check if ANAGRAM
// EX: 'xyz' & 'zxy' are anagrams

function k(a, b) {
  let objA = {}, objB = {};
  
  for (let i=0; i<arr.length; i++) {
    objA[a[i]] = objA[a[i]] ? objA[a[i]] + 1 : 1;
    objB[b[i]] = objB[b[i]] ? objB[b[i]] + 1 : 1;
  }

  for (letkey of objA) {
    if(objA[key] != objB[key]) {
      return false;
    }
  }
  
  return true;
}



let res = k('xyz', 'zxy');
console.log(res);