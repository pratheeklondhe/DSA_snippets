let l = require('./d19');

console.log(l);

// let ll = new LinkedList();
// ll.insertFirst('4');
// ll.insertFirst('3');
// ll.insertFirst('2');
// ll.insertFirst('1');
// ll.insertFirst('0');

function findMidNode(ll) {
    let slow=ll.head, fast=ll.head;
  // console.log(fast);

    while(fast && fast.next && fast.next.next) {
        slow = slow.next;
        fast = fast.next.next;
      
    }

    return slow;
}

console.log(findMidNode(l));