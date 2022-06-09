const expect = require('chai').expect;

const calculator = (num1, num2, operation) => {
    if (operation === 'add') {
        return num1 + num2;
    } 
    if (operation === 'subtract') {
        return num1 - num2;
    }
    if (operation === 'multiply') {
        return num1 * num2;
    }
    if (operation === 'divide') {
        return num1 / num2;
    }
    // return true;
};

// it('calls calculator function', (1, 2, add) => {
//     expect(calculator(1, 2, 'add')).to.equal(3); // calculator is not defined
// });

// it('passes calculator function two numbers to add', () => {
//     expect(calculator(1, 2, 'add')).to.equal(3); // pass!
// });

// it('passes calculator function two numbers to subtract', () => {
//     expect(calculator(3, 2, 'subtract')).to.equal(1); // expected undefined to equal 1
// });

// it('passes calculator function two numbers to subtract', () => {
//     expect(calculator(3, 2, 'subtract')).to.equal(1); // pass!
// });

// it('passes calculator function two numbers to multiply', () => {
//     expect(calculator(5, 5, 'multiply')).to.equal(5); // expected undefined to equal 5
// });

// it('passes calculator function two numbers to multiply', () => {
//     expect(calculator(5, 5, 'multiply')).to.equal(25); // pass!
// });

// it('passes calculator function two numbers to divide', () => {
//     expect(calculator(100, 10, 'divide')).to.equal(10); // expected undefined to equal 10
// });

it('passes calculator function two numbers to divide', () => {
    expect(calculator(100, 10, 'divide')).to.equal(10); // pass!
});