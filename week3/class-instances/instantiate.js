const Greeting = require('./Greeting');

const greeting1 = new Greeting(9); // Multiple of 3
const greeting2 = new Greeting(14); // Multiple of 7
const greeting3 = new Greeting(21); // Multiple of 3 and 7
const greeting4 = new Greeting(5); // Not a multiple of 3 or 7
const greeting5 = new Greeting('TEST'); // NaN

console.log(greeting1.customGreeting()); 
console.log(greeting2.customGreeting()); 
console.log(greeting3.customGreeting()); 
console.log(greeting4.customGreeting()); 
console.log(greeting5.customGreeting()); 