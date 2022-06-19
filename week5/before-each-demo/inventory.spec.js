var expect = require('chai').expect;

const Inventory = require('./inventory');

afterEach(() => {
    console.log('End of individual test.');
});

beforeEach(() => {
    let cart = new Inventory();
    cart.addNewItem('Filter');
    cart.addNewItem('Oil');
    cart.addNewItem('Tire');
});

before (() => {
    console.log('------------ Testing Begins ------------');
});

after (() => {
    console.log('------------ Testing Begins ------------');
});

it ('should add 3 items to the array', () => {
    expect(cart.addNewItem('Coolant')).to.deep.equal(['Filter', 'Oil', 'Tire', 'Coolant']);
});