/**
 * Create an array named myInstruments that contains
 * the following instruments: flute, clarinet,
 * saxophone, trumpet, and trombone
 */
const myInstruments = [
  "flute",
  "clarinet",
  "saxophone",
  "trumpet",
  "trombone",
  "tuba",
  "bassoon",
];

/**
 * Write code to transform it into ["saxophone",
 * "flute", "clarinet", "trumpet", "trombone",
 * "tuba", "bassoon"].
 */

myInstruments.shift();
myInstruments.shift();
myInstruments.shift();
myInstruments.unshift("saxophone", "flute", "clarinet");

/**
 * For the following prompts, write a function
 * according to the description. Test your code as
 * you write it by calling the function and logging
 * the result to the console!
 */

/**
 * 1. getFirstInstruments(instruments: string[])
 * returns the first instrument
 */
function getFirstInstruments(instruments) {
  return instruments[0];
}

// console.log(getFirstInstruments(myInstruments));

/**
 * 2. getLastInstrument(instruments: string[])
 * returns the last instrument.
 */
const getLastInstrument = (instruments) => {
  return instruments[instruments.length - 1];
};

// console.log(getLastInstrument(myInstruments));

/**
 * 3. getFirstAndLastInstruments(instruments: string
 * []) returns a new array containing the first and
 * last instruments without modifying the original
 * array
 */

function getFirstAndLastInstruments(instruments) {
  return [getFirstInstruments(instruments), getLastInstrument(instruments)];
}

// console.log(getFirstAndLastInstruments(myInstruments));

/**
 * 4. getFirstThreeInstruments(instruments: string[])
 * returns the first three instruments without
 * modifying the original array
 */

const getFirstThreeInstruments = (instrumentsArr) => {
  return [
    getFirstInstruments(instrumentsArr),
    instrumentsArr[1],
    instrumentsArr[2],
  ];
};

//console.log(getFirstThreeInstruments(myInstruments));

/**
 * 5. getTInstruments(instruments: string[]) returns
 * all instruments that start with the letter "t"
 * without modifying the original array
 */
function getTInstruments(array) {
  let instruments = [];

  for (let i = 0; i < array.length; i++) {
    //strings can be accessed like arrays
    //string --> tuba
    //index -->  0123
    //so array[i][0] will be the first character for each word
    if (array[i][0] === "t") {
      instruments.push(array[i]);
    }
  }

  return instruments;
}

// console.log(getTInstruments(myInstruments));

/**
 * 6. getLongestNamedInstrument(instruments: string
 * []) returns the instrument with the longest name
 */

const getLongestNamedInstrument = (instruments) => {
  let instrument = instruments[0];

  for (let i = 1; i < instruments.length; i++) {
    if (instruments[i].length > instrument.length) {
      instrument = instruments[i];
    }
  }

  return instrument;
};

console.log(getLongestNamedInstrument(myInstruments));
