module.exports = class Inventory {
    constructor() {
        this.list = []
    }

    addNewItem = part => {
        this.list.push(part);
        return this.list;
    }
}