const expect = require('chai').expect;

function objects(make, model) {
    if (make === "John Dear") {
        if (model === "T1000") {
            return "This is a tractor.";
        }
    }

}

it("Expect to return tractor", () => {
    expect(objects * "John Dear", "T1000".toLocaleLowerCase.equal("This is a tractor."))
})