let l = require('./d19');


function findMidNode(ll) {
    let slow=ll.head, fast=ll.head;

    while(fast && fast.next && fast.next.next) {
        slow = slow.next;
        fast = fast.next.next;
      
    }

    return slow;
}

console.log(findMidNode(l));