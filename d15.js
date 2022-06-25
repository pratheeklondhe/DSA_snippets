// Fibonacci using RECURSION-MEMOIZE

function memoize(fn) {
  let cache = {};
  return function(...args) {
    if(cache[args]) {
      return cache[args];
    }

    let res = fn.apply(this, args);
    cache[res] = res;
    return res;
  }
}


function slowFib(n) {

  if (n===0) return 0;
  if(n===1) return 1;
  // if (n===2) return 1;

  return fib(n-1) + fib(n-2);
}

let fib = memoize(slowFib);
console.log(fib(50));