const assert = require('chai').assert;
const expect = require('chai').expect;
const should = require('chai').should();

describe("Pump", () => {
    describe("Add pump to a ditch", () => {
        it("Should add a pump tp the list", () => {
            let result = true;
            expect(result).to.be.true;
            result.should.be.true;
            assert.isTrue(result);
        })

        it("Should not add a duplicate", () => {
            throw new Error('Duplicate part found');
        })
    })

    describe("Remove pump from ditch", () => {

    })

    describe("Edit pump", () => {

    })
})