// Truthy and Falsey Values

const emptyString = ""; // falsey

const zeroNum = 0; // falsey

const longString = "abcdefghijk"; // truthy

const nonZeroNum = 1; // truthy

const otherNonZeroNum = -1 // truthy...negative numbers are truthy too!

// How to test whether a value is truthy/falsey

// Use the Boolean global object
const isEmptyStringTruthyOrFalseyWithBoolean = Boolean(emptyString);

// Use the double bang (!!) operator
const isEmptyStringTruthyOrFalseyWithBang = !!emptyString;

// if the emptyString is truthy (evaluates to true) the code will execute
if (emptyString) {
  // code
}

// What will these evaluate to? (JavaScript has rules behind the scenes... you don't have to memorize them! can always test)
const firstExample = "2" == 2; // true

const secondExample = [1, 2, 3] == [1, 2, 3]; // false

const thirdExample = "abc" == "def"; // false

// Conditionals

const isSunnyToday = false;

// one line if statement (can omit curly brackets if one line of code, but not best practice)
if (isSunnyToday) console.log("Let's go to the park")

// much better practice to add curly brackets
if (isSunnyToday) {
  console.log("Let's go to the park");
}

// Example of if else if
const hasChocolate = false;

const hasStrawberry = false;

const hasRockyRoad = false;

if (hasChocolate) {
  console.log("Get Chocolate")
} else if (hasStrawberry) {
  console.log("Get Strawbery");
} else if (hasRockyRoad) {
  console.log("Get Rocky Road");
} else {
  console.log("Get Vanilla")
}

// Logical Operators

const a = 5;
const b = -2;

// OR operator (||) returns first truthy value
console.log(a > 0 || b > 0); // true because logs the first truthy value which in this case is the boolean true ( a > 0 evaluates to true)

console.log(true || false || 6); // true because logs first truthy value which is true

console.log(false || false || 6); // 6 because logs first truthy value which is 6

// AND operator (&&) returns first falsey value
console.log(false && 6 && false); // false because logs first falsey value

console.log(a < b && b > 0); // false because logs first falsey value (a < b evaluates to false)

console.log(null && b > 0); // null because logs first falsey value

// Example of a reusable function
const phoneNumber = "5581236678";

function isPhoneNumberValid(phoneNumber) {
  // check if phone number length is 10 characters (simple validation for sake of example...not thorough for real world)
  if (phoneNumber.length === 10) {
    return true;
  } else {
    throw new Error("please enter a valid phone number");
  }
}

const result = isPhoneNumberValid(phoneNumber); // result will be true

// function definition with function keyword
// nameOne and nameTwo are parameters- we can use whatever names we want for parameters... they're like variables
function sayHello(nameOne, nameTwo) {
  console.log(`Hello there, ${nameOne} and ${nameTwo}`);
}
//function definition with arrow
const sayHelloArrow = (nameOne, nameTwo) => {
  console.log(`Hello there, ${nameOne} and ${nameTwo}`);
}

// function invocation (required to actually execute the code inside the function)
// if we don't include arguments, nameOne and nameTwo will  be undefined
sayHello("Cody", "Jill");

// Returns from functions
function returnSomething() {
  return true;
}

// if we log value, it will be true
const value = returnSomething();
