# Block 14: Guided Practice 

You will be writing JavaScript code for this guided practice. Start by creating a new folder and an HTML file. You can write your code either directly in a `<script>` tag or a separate `.js` file. Live serve the HTML so you can check your work in the browser console. 

## Steps 

1. Create an array named `instruments` that contains the following instruments: flute, clarinet, saxophone, trumpet, trombone.

```js
const instruments = ["flute", "clarinet", "saxophone", "trumpet", "trombone"];
console.log(instruments);
```

2. Transform it into `["saxophone", "flute", "clarinet", "trumpet", "trombone", "tuba", "bassoon"]`.  
   _Hint: you can directly modify an index or use methods like `push` and `unshift`!_

```js
// This is one possible solution.
instruments.push("tuba");
instruments.push("bassoon");
instruments.splice(2, 1);
instruments.unshift("saxophone");
console.log(instruments);
```

For the following prompts, write a function according to the description. Test your code as you write it by calling the function and logging the result to the console!

3. `getFirstInstruments(instruments: string[])` returns the first instrument.
   `getFirstInstrument(instruments) >>> "saxophone"`

```js
/**
 * @param {string[]} instruments an array of instruments
 * @returns {string} the first instrument
 */
function getFirstInstrument(instruments) {
  return instruments[0];
}
```

4. `getLastInstrument(instruments: string[])` returns the last instrument.  
   `getLastInstrument(instruments) >>> "bassoon"`

```js
/**
 * @param {string[]} instruments an array of instruments
 * @returns {string} the last instrument
 */
function getLastInstrument(instruments) {
  return instruments.at(-1);
}
```

5. `getFirstAndLastInstruments(instruments: string[])` returns a new array containing the first and last instruments without modifying the original array.  
   `getFirstAndLastInstruments(instruments) >>> ["saxophone", "bassoon"]`

```js
/**
 * @param {string[]} instruments an array of instruments
 * @returns {string[]} the first and last instruments
 */
function getFirstAndLastInstruments(instruments) {
  const output = [];
  output.push(instruments[0]);
  output.push(instruments[instruments.length - 1]);
  return output;

  // Some other ways to do this:
  // return [instruments[0], instruments[instruments.length - 1]];
  // OR
  // return [instruments[0], instruments.at(-1)];
  // OR
  // return [getFirstInstrument(instruments), getLastInstrument(instruments)];
}
```

6. `getFirstThreeInstruments(instruments: string[])` returns the first three instruments without modifying the original array.  
   `getFirstThreeInstruments(instruments) >>> ["saxophone", "flute", "clarinet"]`

```js
/**
 * @param {string[]} instruments an array of instruments
 * @returns {string[]} the first three instruments
 */
function getFirstThreeInstruments(instruments) {
  const output = [];
  output.push(instruments[0]);
  output.push(instruments[1]);
  output.push(instruments[2]);
  return output;

  // Can you think of other ways to do this?
}

// Here's one way to do it with a loop:
function getFirstThreeInstrumentsWithLoop(instruments) {
  const output = [];
  for (let i = 0; i < 3; i++) {
    output.push(instruments[i]);
  }
  return output;
}
```

7. `getTInstruments(instruments: string[])` returns all instruments that start with the letter "t" without modifying the original array.  
   `getTInstruments(instruments) >>> ["trumpet", "trombone", "tuba"]`

_Hint: As you're iterating through the array, what do you need to check for before adding to the output array?_

```js
/**
 * @param {string[]} instruments an array of instruments
 * @returns {string[]} all instruments that start with "t"
 */
function getTInstruments(instruments) {
  const output = [];
  for (const instrument of instruments) {
    if (instrument.startsWith("t")) {
      output.push(instrument);
    }
  }
  return output;
}
```

8. **(Challenge)** `getLongestNamedInstrument(instruments: string[])` returns the instrument with the longest name.  
   `getLongestNamedInstrument(instruments) >>> "saxophone"`

_Hint: Keep track of the instrument with the longest name that you've seen **so far** as you iterate through the array. When should that information be updated?_

```js
/**
 * @param {string[]} instruments an array of instruments
 * @returns {string} the instrument with the longest name
 */
function getLongestNamedInstrument(instruments) {
  let longestInstrument = "";
  for (const instrument of instruments) {
    if (instrument.length > longestInstrument.length) {
      longestInstrument = instrument;
    }
  }
  return longestInstrument;
}
```
