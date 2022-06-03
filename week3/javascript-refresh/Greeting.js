module.exports = class Greeting {
    constructor(userName = "Joe", userAge = 19) {
        this.userName = userName;
        this.userAge = userAge;
    }

    userInfo = () => { return `Hi ${this.userName}. You are ${this.userAge} years old!` }

    userInfo() {
        return this.userName;
    }

    dataType = (arg) => { return `${arg} is a ${typeof(arg)}!`; }

    turnNumberToString = () => {
        let userAgeToString = String(this.userAge);
        return userAgeToString;
    }
}

// class Name {
//     constructor(data1, data2) {
//         this.data1 = data1,
//         this.data2 = data2
//     }

//     functionName = () => { return this.data1 }
// }