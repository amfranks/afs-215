const expect = require('chai').expect;
const TodoList = require('../TodoList');

beforeEach(() => {
    todoList = new TodoList();
});

before(() => {
    console.log('*** Testing Start ***');
});

afterEach(() => {
    console.log('*** Test Complete ***');
});

after(() => {
    console.log('*** All Testing Complete ***');
});

// it('Calls the todo list.', function() {
//     expect(todoList.callList()).to.deep.equal([]); // TypeError: TodoList is not a constructor
// });
it('Calls the todo list.', () => {
    expect(todoList.callList()).to.deep.equal([]); // (Code refactored) Test Passed!
});



// it('Adds an item to the todo list.', () => {
//     expect(todoList.addItemToList('Walk dogs')).to.deep.equal(['Walk dogs']); // todoList.addItemToList is not a function
// });
it('Adds an item to the todo list.', () => {
    expect(todoList.addItemToList('Walk dogs')).to.deep.equal(['Walk dogs']); // (Code refactored) Test Passed!
});



// it('Adds multiple items to the list.', () => { // todoList.addMultipleItemsToList is not a function
//     expect(todoList.addMultipleItemsToList('Go shopping', 46, true, ['1', '2', '3'], {key: 'value1', key1: 'value2'})).to.deep.equal(['Go shopping', 46, true, ['1', '2', '3'], {key: 'value1', key1: 'value2'}]); 
// });
it('Adds multiple items to the list.', () => {
    expect(todoList.addMultipleItemsToList('Go shopping', 46, true, ['1', '2', '3'], {key: 'value1', key1: 'value2'})).to.deep.equal(['Go shopping', 46, true, ['1', '2', '3'], {key: 'value1', key1: 'value2'}]); // (Code refactored) Test Passed!
});



// it('Removes the first item from the todo list.', () => {
//     todoList.addMultipleItemsToList('Go shopping', 'Do dishes', 'Walk dogs');
//     expect(todoList.removeFirstItem()).to.deep.equal(['Do dishes', 'Walk dogs']); // todoList.removeFirstItem is not a function
// });
it('Removes the first item from the todo list.', () => {
    todoList.addMultipleItemsToList('Go shopping', 'Do dishes', 'Walk dogs');
    expect(todoList.removeFirstItem()).to.deep.equal(['Do dishes', 'Walk dogs']); // (Code refactored) Test Passed!
});



// it('Removes the last item from the todo list.', () => {
//     todoList.addMultipleItemsToList('Go shopping', 'Do dishes', 'Walk dogs');
//     expect(todoList.removeLastItem()).to.deep.equal(['Go shopping', 'Do dishes']); // todoList.removeLastItem is not a function
// });
it('Removes the last item from the todo list.', () => {
    todoList.addMultipleItemsToList('Go shopping', 'Do dishes', 'Walk dogs');
    expect(todoList.removeLastItem()).to.deep.equal(['Go shopping', 'Do dishes']); // (Code refactored) Test Passed!
});



// it('Removes a specific item from the todo list.', () => {
//     todoList.addMultipleItemsToList('Go shopping', 'Do dishes', 'Walk dogs');
//     expect(todoList.removeSpecificItem(1, 1)).to.deep.equal(['Go shopping', 'Walk dogs']); // todoList.removeSpecificItem is not a function
// });
it('Removes a specific item from the todo list.', () => {
    todoList.addMultipleItemsToList('Go shopping', 'Do dishes', 'Walk dogs');
    expect(todoList.removeSpecificItem(1, 1)).to.deep.equal(['Go shopping', 'Walk dogs']); // (Code refactored) Test Passed!
});