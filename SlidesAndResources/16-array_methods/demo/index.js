import { gamesData } from "./games.js";

//Array / Object Review

//How to to see the keys of the first object in the gamesData array?

//How to to see the values of the first object in the gamesData array?

//Find the number of each type of game genre within the array array {string} gameGenres
const gameGenres = gamesData.map((game) => {
  return game.Genre;
});
const genreTotals = {};
console.log(genreTotals);

//check that all the values in genreTotals sums to 93

/**
 * 👉 STEP 1: Get the games sold in 2006
 */

/**
 * 👉 STEP 2: Find out how many games have the genre of 'Action' that were sold in 2006
 */
const actionGames = "";

/**
 * 👉 STEP 3: Create a function called getYears that
 * takes `data` as an argument and returns an array
 * containing the years within the dataset
 */
function getYears(/*Your code here */) {
  /*Your code here */
}
//test the function
const yearsData = getYears(gamesData);
console.log(yearsData);

/**
 * 👉 STEP 4: Check if there is a game sold in 2005
 */

/**
 * 👉 STEP 5: Check if there is a game sold in 1997
 */

/**
 * 👉 STEP 6: create a function called parseSales
 * that takes `data` as an argument and
 * updates the sales as float numbers instead of strings
 */
const parseSales = (/*Your code here */) => {
  /*Your code here */
};

//test function
// console.log(gamesData[0]);
parseSales(gamesData);
// console.log(gamesData[0]);

/**
 * 👉 STEP 7: Create a function called getSales
 * that takes `data` as an argument and returns
 * the totla global sales of the games
 */
function getSales(/*Your code here */) {
  /*Your code here */
}
//test the function
console.log(getSales(gamesData));
console.log(getSales(actionGames));

/**
 * 👉 STEP 8: Create a function called lastHalf
 * that takes `data` as an argument and returns
 * the last half of the array
 */
function lastHalf(/*Your code here */) {
  /*Your code here */
}
const lastHalfGamesData = lastHalf(gamesData);
// console.log(
//   lastHalfGamesData[lastHalfGamesData.length - 1],
//   gamesData[gamesData.length - 1]
// );

/**
 * 👉 STEP 9: Create a function called lowecaseGenres
 * that takes `data` as an argument and returns
 * a new array with lowercase genres
 */
const lowercaseGenres = (/*Your code here */) => {
  /*Your code here */
};

// console.log(lowercaseGenres(gamesData)[0]);

/**
 * Window prompt method
 * instructs the browser to display a
 * dialog with an optional message
 * prompting the user to input some text,
 * and to wait until the user either
 * submits the text or cancels the dialog.
 *
 * window.prompt(message, defaultValue)
 */
