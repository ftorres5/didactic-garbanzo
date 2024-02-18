/**
 * Problem:
 *
 * JavaScript creates so much more functionality for a site and automates processes.
 * You are building a vault that requires three mathematical calculations to generate
 * the three codes in a combination. Use the JavaScript console or the script block
 * within an HTML page to create three variables. Each variable will be the result of
 * each calculation (three in total). The combination of the lock is 10 - 40 - 39. You
 * must use three different arithmetic operators that will generate each individual
 * number, then display the combination on the HTML page, or in an alert popup.
 */

/**
 * Pseudocode:
 *
 * 1. Create a constant variable for the first number
 * 2. Set that variable equal to the arithmetic operation that equals 10
 * 3. Create a constant variable for the second number
 * 4. Set that variable equal to the arithmetic operation that equals 40
 * 5. Create a constant variable for the third number
 * 6. Set that variable equal to the arithmetic operation that equals 39
 */

//declare the number variables
const num1 = 100 / 10;
const num2 = 100 - 60;
const num3 = 30 + 9;

//create a message for the user
const message = `You have received this message because you have been chosen to open an important vault. Here is the secret combination: ${num1}, ${num2}, ${num3}`;

//create a dialog box to show the user the message and combination numbers
alert(message);
