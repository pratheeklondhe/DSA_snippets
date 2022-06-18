// Character occurence

function k(str) {
  let obj = {};
  let maxNo = 0;
  let maxStr = '';
  
  for (let char of str) {
    obj[char] = obj[char] ? obj[char] + 1 : 1;

    if (obj[char] > maxNo) {
      maxNo = obj[char];
      maxStr = char;
    }
  }

  return {maxNo, maxStr};
}



let res = k('aac c c c c c a b b b b ');
console.log(res);