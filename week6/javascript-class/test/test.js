const expect = require('chai').expect;
const myArray = require('../MyArray');

// it('Adds an item to the array.', function() {
//     array = new myArray();
//     expect(array.addToArray('Basketball')).to.deep.equal(['Basketball']);
// });

// it('Calls the array.', function() {
//     array = new myArray();
//     expect(array.callArray()).to.deep.equal([]);
// });

// it('Removes an item to the array.', function() {
//     array = new myArray();
//     array.addToArray('Football');
//     array.addToArray('Soccer');
//     array.addToArray('Hockey');
//     expect(array.removeFromArray(0, 1)).to.deep.equal(['Soccer', 'Hockey']);
// });

// it('Searches for an item in the array.', function() {
//     array = new myArray();
//     array.addToArray('Football');
//     expect(array.searchArray('Football')).to.equal(true);
// });

beforeEach(function() {
    array = new myArray();
});

before(function() {
    console.log('*** Testing Start ***');
});

afterEach(function() {
    console.log('*** Test Complete ***');
});

after(function() {
    console.log('*** All Testing Complete ***');
});

it('Adds an item to the array.', function() {
    expect(array.addToArray('Basketball')).to.deep.equal(['Basketball']);
});

it('Calls the array.', function() {
    expect(array.callArray()).to.deep.equal([]);
});

it('Removes an item to the array.', function() {
    array.addToArray('Football');
    array.addToArray('Soccer');
    array.addToArray('Hockey');
    expect(array.removeFromArray(0, 1)).to.deep.equal(['Soccer', 'Hockey']);
});

it('Searches for an item in the array.', function() {
    array.addToArray('Football');
    expect(array.searchArray('Football')).to.equal(true);
});