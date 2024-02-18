//state
const state = {
  numberBank: [],
  evenBank: [],
  oddBank: [],
};

//references
const form = document.querySelector("form");
const formButton = document.querySelector("form > button");
const bankOutput = document.querySelector("#numberBank > output");
const sortOne = document.getElementById("sortOne");
const sortAll = document.getElementById("sortAll");
const oddOutput = document.querySelector("#odds > output");
const evenOutput = document.querySelector("#evens > output");

/**
 * Renders an array of numbers separated by
 * commas to the element passed
 *
 * @param {Number[]} numberBank - array of integers
 * @param {Object} element - DOM element to replace the children of
 */
const renderNumberBank = (numberBank, element) => {
  //add commas to the numbers before rendering them
  const commaNumberBank = numberBank.join(", ");
  element.replaceChildren(...commaNumberBank);
};

/**
 * Adds a number based on user input
 * to the number bank within state.
 * Updates the DOM to reflect the new state
 *
 * @param {Object} event - the click event
 */
const addNumberToBank = (event) => {
  //prevent the page from refreshing
  event.preventDefault();
  //get the number from the form
  const number = form.elements.number.value;

  //add the number to the state number bank
  //changing it to a typeof number
  state.numberBank.push(parseInt(number));

  //reset form input
  form.elements.number.value = null;

  //re-render the number bank output
  renderNumberBank(state.numberBank, bankOutput);
};

/**
 * Removes the first number from the number bank wihtin state
 * Adds the number into the odd output if it's odd otherwise it adds it to the event output
 * Updates the DOM to reflect the new state
 *
 */
const sortOneNum = () => {
  //checks if the numberbank within state has numbers to sort
  if (state.numberBank.length > 0) {
    //removes the first number
    const num = state.numberBank.shift();

    //checks if it's even
    if (num % 2 === 0) {
      //adds the number to the even bank within state
      state.evenBank.push(num);
      //re-renders the even bank to the DOM
      renderNumberBank(state.evenBank, evenOutput);
    } else {
      //adds the number to the odd bank within state
      state.oddBank.push(num);
      //re-renders the odd bank to the DOM
      renderNumberBank(state.oddBank, oddOutput);
    }

    //re-renders the number bank to the DOM
    renderNumberBank(state.numberBank, bankOutput);
  }
};

/**
 * Sorts all numbers from the number bank within state as even or odd
 * Adds the numbers to the appropiate location
 * Sets the number bank within state as empty
 * Updates the DOM to reflect the new state
 *
 */
const sortAllNum = () => {
  //goes through each number in the number bank within state
  state.numberBank.forEach((num) => {
    //checks if it's even
    if (num % 2 === 0) {
      //adds the number to the even bank within state
      state.evenBank.push(num);
      //re-renders the even bank to the DOM
      renderNumberBank(state.evenBank, evenOutput);
    } else {
      //adds the number to the odd bank within state
      state.oddBank.push(num);
      //re-renders the odd bank to the DOM
      renderNumberBank(state.oddBank, oddOutput);
    }
  });

  //remove all numbers from numberBank
  state.numberBank = [];
  //re-render the number bank output to show removed numbers
  renderNumberBank(state.numberBank, bankOutput);
};

//events
formButton.addEventListener("click", addNumberToBank);
sortOne.addEventListener("click", sortOneNum);
sortAll.addEventListener("click", sortAllNum);
