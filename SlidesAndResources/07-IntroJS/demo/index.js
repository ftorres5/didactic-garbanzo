// Declaring Variables

// Antiquated... we don't want to use this (because of scope... which we will cover later)
var exampleVariable = 'example';

// We want to use these (let and const)!
let changingVariable = 5;


const changeBeforeString = 'changing variable before: '
const changeAfterString = 'changing variable after: '

console.log(changeBeforeString, changingVariable)

changingVariable = 10;

console.log(changeAfterString, changingVariable)

const staticVariable = 10;

console.log('static variable before: ', staticVariable)

// This would cause an error
// staticVariable = 20;

console.log('static variable after: ', staticVariable)

const str1 = "Fullstack";
const str2 = "Academy";
const strComplete = `Welcome ${str1} ${str2}!`;

const withConcatenation = "Welcome " + str1 + " " + str2 + "!";

// Arithmetic operators

/* Modulus
 We use modulus to see if a number is even or odd:
if a number % 2 = 0, the number is even, if a number % 2 = 1, number is odd
*/
const topNum = 5;
const bottomNum = 2;
const remainder = 5 % 2;

/* Browser Test:
If you open up the html in the browser, you should see the alert below
in the dialogue box, and you should see all the above logs if you inspect
the page in the console of the browser. Feel free to play around with it
and add other logs!
*/

alert("The JavaScript code is connected to the HTML!")
