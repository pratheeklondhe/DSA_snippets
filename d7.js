// Capitalize every first Letter after space
// EX: 'a lazy fox' ---->  'A Lazy Fox'

function k(str) {
  return str.split(' ').map((word) => word[0].toUpperCase() +     word.slice(1)).join(' ');
}

let res = k('a lazy fox');
console.log(res);