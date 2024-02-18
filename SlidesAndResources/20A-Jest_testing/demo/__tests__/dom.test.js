// 👉 STEP 1:  Import onReverseButtonClick from index.js
// 👉 STEP 2:  Import getByRole and fireEvent from the DOM testing library

/**
 * Resets the document to its initial state before each test.
 */
function resetDOM() {
  document.body.innerHTML = `
  <main>
    <h1>String Reverser</h1>
    <label>
      Type something:
      <input type="text" />
    </label>
    <button>Reverse!</button>
    <label>
      Output:
      <output></output>
    </label>
  </main>`;
  // document
  //   .querySelector("button")
  //   .addEventListener("click", onReverseButtonClick);
}

// 👉 STEP 2:  Create a describe() block for the function we will test

// 👉 STEP 3:  call the resetDOM function beforeEach test

// 👉 STEP 4: Create a test for the happy path
// See https://www.w3.org/TR/html-aria/#docconformance

// 👉 STEP 4: Create a test for the sad path
