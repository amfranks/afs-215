module.exports = class Pet {
    constructor() {
        this.array = [];
    }

    testFunction = () => {
        return 'Hello';
    }

    pushArray = item => {
        this.array.push(item);
        return this.array;
    }
}