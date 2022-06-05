module.exports = class Greeting {
    constructor(num) {
        this.num = num;
    }

    customGreeting = () => {
        if (typeof(this.num) != 'number') {
            return 'Invalid argument. Must be a number!';
        }

        if (this.num % 3 === 0 && this.num % 7 === 0) {
            return "Good Evening";
        } else if (this.num === 3 || this.num % 3 === 0) {
            return "Good Morning";
        } else if (this.num === 7 || this.num % 7 === 0) {
            return "Good Afternoon";
        } else if (this.num % 3 !== 0 && this.num % 7 !== 0) {
            let num = this.num.toString();
            return num
        }
    }
}