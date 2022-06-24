const expect = require('chai').expect;
const Pet = require('../Pet');

it('true is true', function() {
    expect(true).to.equal(true);
});

it('return Pet', function() {
    var pet = new Pet();
});

it('return Hello', function() {
    expect(pet.testFunction()).to.equal('Hello');
});

// .deep is the equivalent of switching the comparison from === (strict)
// to == (loose)

it('returns array with equal', function() {
    expect(pet.pushArray('kitten')).to.equal(['kitten']); // expected ['kitten'] to equal ['kitten']
});

it('returns array with deep', function() {
    expect(pet.pushArray('kitten')).to.deep.equal(['kitten']);
});

// before, after, beforeEach, afterEach

beforeEach(function() {
    pet = new Pet();
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