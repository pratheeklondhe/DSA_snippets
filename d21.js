let ll = require('./d19');


ll.getLast().next = ll.getAt(2);

console.log(ll);

function isCircular(ll) {
  let slow=ll.getFirst(), fast=ll.getFirst();

  while(fast && fast.next && fast.next.next) {
        slow = slow.next;
        fast = fast.next.next;
    if(slow === fast) {return true;}
    
    }
  return false;
}

console.log(isCircular(ll));