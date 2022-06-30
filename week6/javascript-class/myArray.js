module.exports = class myArray {
    constructor() {
        this.array = [];
    }

    callArray = () => {
        return this.array;
    }

    addToArray = item => {
        this.array.push(item);
        return this.array;
    }

    removeFromArray = (startIndex, deleteCount) => {
        this.array.splice(startIndex, deleteCount);
        return this.array;
    }

    searchArray = item => {
        if (this.array.includes(item)) {
            return true;
        } else {
            return 'Item not found.';
        }
    }
}