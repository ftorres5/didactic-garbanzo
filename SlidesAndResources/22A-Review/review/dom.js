/**
 * can we do some DOM and events examples?
 */
//grab the div with id of root
const root = document.getElementById("root");
// const root = document.querySelector("#root");

//what type of events on the DOM?
// click

//what type of element has a click event?
//button, forms, any element can have a click event

//create button to add to our page
const btn = document.createElement("button");
btn.textContent = "Click Me";
root.appendChild(btn);

// btn.addEventListener("click", () => alert("Hello"));
btn.addEventListener("click", sayHello);

function sayHello() {
  const name = prompt("What is your name?");
  alert(`Hello ${name}`);
}
