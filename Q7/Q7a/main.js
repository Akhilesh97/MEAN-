var stack = require('./stack_module.js')
var Q = require('./queue_module.js')
stack.push("A")
stack.push("B");
stack.push("C");
console.log("Popping top element"+stack.pop());
console.log("Popping top element"+stack.pop());
console.log("Popping top element"+stack.pop());
Q.enqueue("A");
Q.enqueue("B");
Q.enqueue("C");

console.log("Removing front element"+Q.dequeue());
console.log("Removing front element"+Q.dequeue());
console.log("Removing front element"+Q.dequeue());
