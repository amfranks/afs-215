module.exports = class User {
    constructor(num1, num2, name = 'Andrew', age = 26) {
        this.num1 = num1;
        this.num2 = num2;
        this.name = name;
        this.age = age;
    }

    add = () => {
        return (this.num1 + this.num2);
    };

    subtract = () => {
        return (this.num1 - this.num2);
    };

    multiply = () => {
        return (this.num1 * this.num2);
    };

    divide = () => {
        return (this.num1 / this.num2);
    };

    greet = () => {
        return `Welcome ${this.name}! You are ${this.age} years old.`
    }

    convertToString = () => {
        return (this.num1.toString()) + (this.num2.toString())
    }
}