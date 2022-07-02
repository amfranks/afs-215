module.exports = class TodoList {
    constructor() {
        this.array = [];
    }

    callList = () => {
        return this.array;
    }

    addItemToList = item => {
        this.array.push(item);
        return this.array;
    }

    addMultipleItemsToList = (...args) => {
        for (const arg of args) {
            this.array.push(arg);
        }
        return this.array;
    }

    removeFirstItem = () => {
        this.array.shift();
        return this.array;
    }

    removeLastItem = () => {
        this.array.pop();
        return this.array;
    }

    removeSpecificItem = (startIndex, deleteCount) => {
        this.array.splice(startIndex, deleteCount);
        return this.array;
    }
} 