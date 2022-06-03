const User = require('./User');

const user1 = new User(34, 5);
const user2 = new User(1, 543, 'Aaron', 41);

console.log(user1.add());
console.log(user1.subtract());
console.log(user1.multiply());
console.log(user1.divide());
console.log(user1.greet());
console.log(user1.convertToString());

console.log('\n**********************\n');

console.log(user2.add());
console.log(user2.subtract());
console.log(user2.multiply());
console.log(user2.divide());
console.log(user2.greet());
console.log(user2.convertToString());