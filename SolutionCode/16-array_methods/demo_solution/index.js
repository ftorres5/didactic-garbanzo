import { gamesData } from "./games.js";

//Array / Object Review
//How to to see the keys of the first object in the gamesData array?
console.log(Object.keys(gamesData[0]));

//How to to see the values of the first object in the gamesData array?
console.log(Object.values(gamesData[0]));

//Find the number of each type of game genre within the array {string} gameGenres
const gameGenres = gamesData.map((game) => {
  return game.Genre;
});
// const gameGenres = ["Misc", "Strategy", "Misc"];
const genreTotals = {};
// Genre: #
gameGenres.forEach((genre) => {
  //if key in our object doesn't exist

  // if (!Object.keys(genreTotals).includes(genre)) {
  //   genreTotals[genre] = 1;
  // } else {
  //   genreTotals[genre] += 1;
  // }

  //if key exists in our object
  if (genreTotals[genre]) {
    // += also works or ++ in beginning
    // update a key value pair in map
    genreTotals[genre]++;
  } else {
    // set new key value pair in map
    genreTotals[genre] = 1;
  }
});
// console.log(genreTotals);

/**
 * {}, ['Misc', 'Strategy', 'Misc']
 * forEach
 *
 *  index 0 genre = 'Misc'
 *    if {} has a key === 'Misc' --> no
 *    add the key to our object and start at 1--> {Misc: 1}
 *
 *  {Misc: 1}, index 1, genre = 'Strategy'
 *    does our obj have a key called Strategy? --> no
 *    add the key to our object and start at 1--> {Strategy: 1, Misc: 1}
 *
 *  {Strategy: 1, Misc: 1}, index 2, genre = 'Misc'
 *     if {} has a key === 'Misc' --> yes --> increment # at key
 *
 * final object --> {Strategy: 1, Misc: 2}
 */

console.log(genreTotals);
//should be 100 aka length of gamesData
const totalGenreValues = Object.values(genreTotals).reduce((total, num) => {
  return (total += num);
}, 0);
console.log(totalGenreValues);

/**
 * 👉 STEP 1: Get the games sold in 2006
 */
const gamesIn2006 = gamesData.filter((game) => {
  return game.Year_of_Release === "2006";
});
console.log(gamesIn2006.length);

/**
 * 👉 STEP 2: Find out how many games have the genre of 'Action' that were sold in 2006
 */
const actionGames = gamesIn2006.filter((game) => {
  return game.Genre === "Action";
});
console.log(actionGames.length);

/**
 * 👉 STEP 3: Create a function called getYears that
 * takes `data` as an argument and returns an array
 * containing the years within the dataset
 */
function getYears(data) {
  return data.map((element) => {
    return element.Year_of_Release;
  });
}
//test the function
const yearsData = getYears(gamesData);
console.log(yearsData);

/**
 * 👉 STEP 4: Check if there is a game sold in 2005
 */
const gameSold2005 = yearsData.find((year) => year === "2005");
console.log(gameSold2005);

/**
 * 👉 STEP 5: Check if there is a game sold in 1997
 */
const gameSold1997 = yearsData.includes("1997");
console.log(gameSold1997);

/**
 * 👉 STEP 6: create a function called parseSales
 * that takes `data` as an argument and
 * updates the sales as float numbers instead of strings
 */
const parseSales = (data) => {
  data.forEach((sale) => {
    sale.Global_Sales = parseFloat(sale.Global_Sales);
  });
};

//test function
console.log(gamesData[0]);
parseSales(gamesData);
console.log(gamesData[0]);

/**
 * 👉 STEP 7: Create a function called getSales
 * that takes `data` as an argument and returns
 * the totla global sales of the games
 */
function getSales(data) {
  return data.reduce((total, { Global_Sales }) => {
    return total + Global_Sales;
  }, 0);
}
//test the function
console.log(getSales(gamesData));
console.log(getSales(actionGames));

/**
 * 👉 STEP 8: Create a function called lastHalf
 * that takes `data` as an argument and returns
 * the last half of the array
 */
function lastHalf(data) {
  return data.slice(data.length / 2, data.length);
}
const lastHalfGamesData = lastHalf(gamesData);
console.log(
  lastHalfGamesData[lastHalfGamesData.length - 1],
  gamesData[gamesData.length - 1]
);

const lastHalfYears = lastHalf(yearsData);
console.log(
  lastHalfYears[lastHalfYears.length - 1],
  yearsData[yearsData.length - 1]
);

/**
 * 👉 STEP 9: Create a function called lowercaseGenres
 * that takes `data` as an argument and returns
 * a new array with lowercase genres
 */
const lowercaseGenres = (data) => {
  return data.map((game) => {
    /**
     * spread operator
     * allows an iterable, such as an array, object or string, to be expanded in
     * places where zero or more or elements are expected
     *
     * this creates a new object spreading out all the key:value pairs from game and
     * updating the Genre key without changing the original data object
     */
    return {
      ...game,
      Genre: game.Genre[0].toLowerCase() + game.Genre.slice(1),
    };
  });
};

console.log(lowercaseGenres(gamesData)[0]);
console.log(gamesData[0]);

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
