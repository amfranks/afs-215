module.exports = class Pumps {
    constructor(count, miles, model, make = "John Dear") {
        this.count = count;
        this.miles = miles;
        this.model = model;
        this.make = make;
    }

    pumps = (name) => {
        if (name === "T1000") {
            return this.count * this.miles;
        }
        if (name === "B500") {
            return this.count * this.miles;
        }
        if (name === "S800") {
            return this.count * this.miles;
        }
        else {
            return "Not on the list";
        }
    };

    greeting = (make = this.make, model = this.model) => {
        return `Make is ${make}, model number ${model}. Today it cut ${this.count} ditches and did ${this.miles}`;
    }
}