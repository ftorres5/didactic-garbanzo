const { bookText } = require("./book-text");

/**
 * Prompt 1: How many tokens are in bookText?
 */
const totalTokens = bookText.length;
console.log(`There are ${totalTokens} tokens in bookText`); // 60031 tokens

/**
 * Prompt 2: What is the total number of characters in bookText?
 */
function getTotalChar(tokens) {
  return tokens.reduce((total, token) => total + token.length, 0);
}
const numChars = getTotalChar(bookText);
console.log(`There are ${numChars} number of character in bookText`); //269100 characters

/**
 * Prompt 3: What is the mean length of a token?
 */
const meanTokenLength = numChars / totalTokens;
console.log(`The mean length of a token is ${meanTokenLength}`); //4.48268 mean length

/**
 * Prompt 4: What is the length of the longest token?
 */
function longestToken(tokens) {
  return tokens.reduce((longestLength, token) => {
    return token.length > longestLength ? token.length : longestLength;
  }, 0);
}
const longest = longestToken(bookText);
console.log(`The length of the longest token is ${longest}`); //longest length 22

/**
 * Prompt 5: How many tokens are longer than 4 characters?
 */
function longerThan4Chars(tokens) {
  return tokens.filter((token) => token.length > 4);
}
const tokensLongerThan4 = longerThan4Chars(bookText);
console.log(
  `There are ${tokensLongerThan4.length} tokens that have more than 4 characters`
); // 24066 tokesn longer than 4 characters

/**
 * Prompt 6: How many tokens start with the letter "s" (case-insensitive)?
 */
/**
 *
 * startsWith is a curried function
 */
function startsWith(tokens) {
  return (letter) => {
    return tokens.filter(
      //change both letters to lowercase so it's case-insentitive
      (token) => token[0].toLowerCase() === letter.toLowerCase()
    );
  };
}
const sWords = startsWith(bookText)("s");
console.log(
  `There are ${sWords.length} tokens that start with the letter 's' (case-insensitive)`
); // 4599 tokens

/**
 * Prompt 7: Do more tokens start with the letter "s" or "t"?
 */
const tWords = startsWith(bookText)("t");
console.log(
  `There are ${tWords.length} tokens that start with the letter 't' (case-insensitive)`
); //10319 tokens
console.log(
  `More tokens start with ${sWords.length > tWords.length ? "s" : "t"}.`
); //more t words than s words

/**
 * Prompt 8: What are the 5 most frequent tokens that appear in the text, and how many times do they each appear?
 */
function getFrequency(frequencies, token) {
  if (!frequencies[token]) {
    frequencies[token] = 1;
  } else {
    frequencies[token] += 1;
  }
  return frequencies;
}
/**
 *
 * getTokenFrequency is a function composition
 * it uses a higher order function (reduce array method)
 * and the curried getFrequency function
 */
function getTokenFrequency(tokens) {
  return tokens.reduce(getFrequency, {});
}
//tokenFrequencies is an object with each token as the key and the frequency the value
const tokenFrequencies = getTokenFrequency(bookText);
//we convert the object into an array with Object.entries and use the sort method to sort them
//so the highest number is at the top of the array
const sortedTokens = Object.entries(tokenFrequencies).sort((t1, t2) => {
  return t2[1] - t1[1];
});
//join with a newline (\n) so each word and their frequency is on their own line within the console
console.log(
  `The 5 most frequent tokens and their frequencies are: \n${sortedTokens
    .slice(0, 5)
    .join("\n")}`
);
/**
 * The 5 most frequent tokens and their frequencies are:
 * the,4392
 * and,2352
 * of,2283
 * a,1524
 * I,1231
 */

/**
 * Prompt 9: What are the 5 most frequent characters that appear in the text, and how many times do they each appear?
 */
function countChar(frequencies, token) {
  for (const char of token) {
    frequencies = getFrequency(frequencies, char);
  }

  return frequencies;
}
/**
 *
 * getCharFrequency is a function composition
 * it uses a higher order function (reduce array method)
 * and the countChar function
 */
function getCharFrequency(tokens) {
  return tokens.reduce(countChar, {});
}
//charFrequencies is an object with each token as the key and the frequency the value
const charFrequencies = getCharFrequency(bookText);
//we convert the object into an array with Object.entries and use the sort method to sort them
//so the highest number is at the top of the array
const sortedChars = Object.entries(charFrequencies).sort((c1, c2) => {
  return c2[1] - c1[1];
});
//join with a newline (\n) so each character and their frequency is on their own line within the console
console.log(
  `The 5 most frequent characters and their frequencies are: \n${sortedChars
    .slice(0, 5)
    .join("\n")}`
);
/**
 * The 5 most frequent characters and their frequencies are:
 * e,33148
 * t,24771
 * a,21889
 * n,19091
 * o,18435
 */

/**
 * Prompt 10: How many tokens do not contain any vowels?
 */
function containsNoVowels(token) {
  for (const char of token) {
    if ("aeiou".includes(char)) {
      return false;
    }
    return true;
  }
}

/**
 *
 * getNoVowels is a function composition
 * it uses a higher order function (filter array method)
 * and the containsNoVowels function
 *
 */
function getNoVowels(tokens) {
  return tokens.filter(containsNoVowels);
}

const noVowelTokens = getNoVowels(bookText);
console.log(`${noVowelTokens.length} tokens do not contain any vowels.`); //44647 tokens do not contain any vowels.
