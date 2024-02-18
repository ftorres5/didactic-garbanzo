// click submit - "click" event
// add input - "change" event

// Step 1: grab input, submit, and paragraph from DOM
// Step 2: create array to track inputs on submission, and a string (let) to track current input
// Step 3: Create 2 event listeners, one on change to track input value, one on button click to update text
// Step 4: Update text content of paragraph (using either innerHTML or innerText or textContent) to be the content of the array

const inputElement = document.getElementById("demo-input");

const submitButtonElement = document.getElementById("submit-button");

const orderedListElement = document.getElementById("elements");

const elements = [];

let currentInputValue = "";

inputElement.addEventListener("input", (e)=> {
  currentInputValue = e.target.value;
});

submitButtonElement.addEventListener("click", () => {
  const listItem = document.createElement("li");
  listItem.textContent = currentInputValue;
  elements.push(listItem);
  orderedListElement.replaceChildren(...elements);
});
