const Greeting = require('./Greeting');

const guest1 = new Greeting("Bob");
const guest2 = new Greeting("Mary", 39);

console.log('***Guest1***');
console.log(guest1.userAge);
console.log(guest1.userInfo());
console.log(guest1.dataType(guest1.userAge));
console.log(guest1.turnNumberToString());
console.log(guest1.dataType(guest1.turnNumberToString()));
console.log(guest1.turnNumberToString());


console.log('***Guest2***');
console.log(guest2.userAge);
console.log(guest2.dataType(guest2.userAge));
console.log(guest2.turnNumberToString());
console.log(guest2.dataType(guest2.turnNumberToString()));
console.log(guest2.turnNumberToString());