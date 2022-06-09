const expect = require('chai').expect;

// Mocha is the framework - This is what is used to run our tests.
// Chai is the assertion library - this is what is used to provide us 
// with a more natural language statement with assertions. Assertions are
// able to be created by chaining together keywords that belong to chai. 
// Some example keywords are: to, be, been, is, that, which, has, have,
// with, at, of, same, but, does
// expect(1).to.be.that.which.is.equal(1) is the same as expect(1).to.equal(1)

it('expect passing test', function() {
    expect(true).to.equal(true) // expected true to equal false
});

// Create a function that can accomplish the following.
// 1. Returns "yellow" when passed "Sprint".
// 2. Returns "blue" when passed "att".
// 3. Returns "red" when passed "verizon".

function cellPhone(arg) {
    if (arg === "att") {
        return "blue";
    }
    if (arg === "Sprint") {
        return "yellow";
    }
    if (arg === "verizon") {
        return "red";
    }
    else {
        return "Not an option";
    }
}

it('returns "yellow" when passed "Sprint"', function() {
    expect(cellPhone("Sprint")).to.equal("yellow");
});

it('returns "blue" when passed "att"', function() {
    expect(cellPhone("att")).to.equal("blue");
});

it('returns "red" when passed "verizon"', function() {
    expect(cellPhone("verizon")).to.equal("red");
});

it('returns error message when passed none of the above', function() {
    expect(cellPhone("grasshopper")).to.equal("Not an option");
});