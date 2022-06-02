const Pumps = require('./user.js');

let model1 = new Pumps(2, 5000);
let model2 = new Pumps(3, 4000);

console.log(model1.greeting("Redline", "T1000"))
console.log(model1.pumps("T1000") + " miles in total");