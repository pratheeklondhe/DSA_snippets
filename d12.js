// Find No of Vowels  



function k(str) {
  let c=0;
  for(let i=0; i<str.length; i++) {
  if(['a','e','i','o', 'u'].includes(str[i])){
    c++;
  }
    
  }
  return c;
}

console.log(k('hi-hellooaeou'));