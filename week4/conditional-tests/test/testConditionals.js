const expect = require('chai').expect;

const conditionals = (num) => {
    if (isNaN(num)) { // Datatype is not a number.
        return 'ERROR';
    }
    if (num === 3 || num % 3 === 0 && num % 7 !== 0) { // Multiple of 3 (but not of 7).
        return 'Good Morning';
    }
    if (num === 7 || num % 7 === 0 && num % 3 !== 0) { // Multiple of 7(but not of 3).
        return 'Good Afternoon';
    }
    if (num % 3 === 0 && num % 7 === 0) { // Multiple of 3 and 7.
        return 'Good Evening';
    }
    if (num % 3 !== 0 && num % 7 !== 0) { // Neither a multiple of 3 or 7.
        return num.toString();
    }
    if (num === 1) {
        return '1';
    }
    if (num === 2) {
        return '2';
    }
    if (num === 3) {
        return 'Good Morning';
    }
    if (num === 7) {
        return 'Good Afternoon';   
    }
}; 

// it('returns "1" when passed 1', () => {
//     expect(conditionals(1)).to.equal('1'); // expected undefined to equal '1'
// });

// it('returns "1" when passed 1', () => {
//     expect(conditionals(1)).to.equal('1'); // pass!
// });

/********************************************************************************************/

// it('returns "2" when passed 2', () => {
//     expect(conditionals(2)).to.equal('2'); // expected undefined to equal '2'
// });

// it('returns "1" when passed 1', () => {
//     expect(conditionals(1)).to.equal('1'); // pass!
// });

/********************************************************************************************/

// it('returns "Good Morning" when passed a 3', () => {
//     expect(conditionals(3)).to.equal('Good Morning'); // expected undefined to equal 'Good Morning' 
// });

// it('returns "Good Morning" when passed a 3', () => {
//     expect(conditionals(3)).to.equal('Good Morning'); // pass!
// });

/********************************************************************************************/

// it('returns "Good Afternoon" when passed a 7', () => {
//     expect(conditionals(7)).to.equal('Good Afternoon'); // expected undefined to equal 'Good Afternoon' 
// });

// it('returns "Good Afternoon" when passed a 7', () => {
//     expect(conditionals(7)).to.equal('Good Afternoon'); // pass!
// });

/********************************************************************************************/

// it('returns "Good Morning" when passed a 3 or multiple thereof', () => {
//     expect(conditionals(12)).to.equal('Good Morning'); // expected undefined to equal 'Good Morning' 
// });

// it('returns "Good Morning" when passed a 3 or multiple thereof', () => {
//     expect(conditionals(12)).to.equal('Good Morning'); // pass!
// });

/********************************************************************************************/

// it('returns "Good Morning" when passed a 7 or multiple thereof', () => {
//     expect(conditionals(49)).to.equal('Good Afternoon'); // expected undefined to equal 'Good Afternoon' 
// });

// it('returns "Good Morning" when passed a 7 or multiple thereof', () => {
//     expect(conditionals(12)).to.equal('Good Morning'); // pass!
// });

/********************************************************************************************/

// it('returns "Good Evening" when passed a multiple of 3 and 7', () => {
//     expect(conditionals(21)).to.equal('Good Evening'); // expected undefined to equal 'Good Evening' 
// });

// it('returns "Good Evening" when passed a multiple of 3 and 7', () => {
//     expect(conditionals(21)).to.equal('Good Evening'); // pass!
// });

/********************************************************************************************/

// it('returns as string if number is neither a multiple of 3 or 7', () => {
//     expect(conditionals(4)).to.equal('4'); // expected undefined to equal '4' 
// });

// it('returns as string if number is neither a multiple of 3 or 7', () => {
//     expect(conditionals(4)).to.equal('4'); // pass!
// });

/********************************************************************************************/

// it('return an error message if any data type other than a number is passed', () => {
//     expect(conditionals('This is a string.')).to.equal('ERROR'); // expected 'This is a string.' to equal 'ERROR'
// });


it('return an error message if any data type other than a number is passed', () => {
    expect(conditionals('This is a string.')).to.equal('ERROR'); // pass!
});