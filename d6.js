// Check if ANAGRAM
// EX: 'xyz' & 'zxy' are anagrams

function k(a, b) {
  a = a.toUpperCase();
  b = b.toUpperCase();
  
  if (a.length != b.length) return false;
  
  let objA = {}, objB = {};
  
  for (let i=0; i<a.length; i++) {
    
    objA[a[i]] = objA[a[i]] ? objA[a[i]] + 1 : 1;
    objB[b[i]] = objB[b[i]] ? objB[b[i]] + 1 : 1;
  }

  for (let key in objA) {
    if(objA[key] != objB[key]) {
      return false;
    }
  }
  
  return true;
}



let res = k('xyz', 'ZXy');
console.log(res);