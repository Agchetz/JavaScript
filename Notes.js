//toFixed() = rounds off the required number of decimal points.
let lotsOfDecimal = 1.766584958675746364;
lotsOfDecimal;
let twoDecimalPlaces = lotsOfDecimal.toFixed(2);
twoDecimalPlaces;

//Number()converting string to number 
let myNumber = '74';
myNumber + 3;
typeof myNumber; // checking the type of data
Number(myNumber) + 3;

// OPERATORS

// 1. Assignment Operator - wassigns from right to left side

 example - (x=y)
 //let z = (x=y) is equal to z=x=y (returns (x=y))
 //return (x=y -> returns y)



// 2. Unary opertaor

//example
x = 42; // implicitly creates window.x
var y = 43;
var myobj = {h: 4}; // create object with property h
delete x;       // returns false (cannot delete if created implicitly)
delete y;       // returns false (cannot delete if declared with var)
delete Math.PI; // returns false (cannot delete non-configurable properties)
delete myobj.h; // returns true (can delete user-defined properties)

 