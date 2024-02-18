const items = [
  { id: 1, name: "foo", price: 7 },
  { id: 2, name: "bar", price: 6 },
  { id: 3, name: "bazz", price: 9 },
  { id: 3, name: "quq", price: 13 },
];

//step 4
const name = window.prompt("Enter an item name:", "foo");

//step 5
const found = items.find((item) => {
  return item.name === name;
});

//step 6
if (found) {
  console.log("We found the item", found);
} else {
  console.log("We could not find the item");
}

//step 7
const search = window.prompt("Enter a string to find within an item", "foo");

//step 8
const foundItems = items.filter((item) => {
  return item.name.includes(search);
});

if (foundItems.length > 0) {
  console.log("Here are the items:", foundItems);
} else {
  console.log("We could not find any items including that string");
}

//step 9
const keyForMapping = window.prompt(
  "Enter id, name or price in order to display the values.",
  "name"
);

const mappedValues = items.map((item) => {
  return item[keyForMapping];
});

console.log(mappedValues);

//step 10
const keyForReducer = window.prompt(
  "Enter id or price to see the sum",
  "price"
);

const sum = items.reduce((total, item) => {
  return total + item[keyForReducer];
}, 0);

console.log(sum);
