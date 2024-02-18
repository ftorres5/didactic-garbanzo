//Block 13: Statements, Conditionals, and Functions
/**
 *
 * iterating through nested arrays (arrays of objects)
 */

// if(true){
//     //this
// } else {

// }

/**
 * [] --> array
 * () --> call / invoke func
 * {} --> object
 */

const mmmm = [
  { first_name: "Jane", last_name: "Doe", color: "blue" },
  { first_name: "Joe", last_name: "Doe", color: "red" },
  { first_name: "Scott", last_name: "Kelly", color: "green" },
];
//grab first name of the first object
//how do I get the first element of an array?
let first = mmmm[0];
//how do I get a key's value in an object
first = first.first_name;
// console.log(first);

//go through each element of an array?
// for loop,
let fnames = [];
for (let i = 0; i < mmmm.length; i++) {
  //i = 0, 1, 2
  let first = mmmm[i];
  first = first.first_name;
  fnames.push(first);
}

console.log(fnames);

/**
 * const mmmm = [
  { first_name: "Jane", last_name: "Doe", color: "blue" },
  { first_name: "Joe", last_name: "Doe", color: "red" },
  { first_name: "Scott", last_name: "Kelly", color: "green" },
];
 */
fnames = [];
//forEach
mmmm.forEach((person, i) => {
  //index === 0 --> person = { first_name: "Jane", last_name: "Doe", color: "blue" },
  let first = person; // first => person --> {}
  first = first.first_name; // first => person.first_name --> ""
  fnames.push(first);
});

fnames.forEach((person) => {
  console.log(person);
});

console.log(fnames);

/**
 * const vs let
 *
 * const defines a constant variable --> define something that doesn't change
 *
 * let defines a variable that changes
 */

const nums_str = ["123", "20"];

const nums = nums_str.map((num) => {
  return parseInt(num);
});
console.log(nums);
