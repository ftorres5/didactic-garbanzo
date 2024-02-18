// Fruit Salad
// Modify the array using various array methods:
// .pop(), .push(), .unshift(), .shift()

// As you modify the array, check the array.length to see how the array changes.

const fruits = ["lemon", "strawberry", "grape", "orange", "lime"];

// 👉 STEP 1: Remove lime from the end of fruits array.
fruits.pop();
console.log(fruits);

// 👉 STEP 2: Remove orange from the end of fruits array.
fruits.pop();
console.log(fruits);

// 👉 STEP 3: Add lime to the end of the fruits array.
fruits.push("lime");
console.log(fruits);

// 👉 STEP 4: Add banana and dragonfruit to the end of the fruits array.
fruits.push("banana", "dragonfruit");
console.log(fruits);

// 👉 STEP 5: Remove the first fruit in the fruits array.
fruits.shift();
console.log(fruits);

// 👉 STEP 6: Add apple to the beginning of the fruits array.
fruits.unshift("apple");
console.log(fruits);

// 👉 STEP 7: Add peach and watermelon to the beginning of the fruits array.
fruits.unshift("peach", "watermelon");
console.log(fruits);

/**
 * 👉 STEP 8: Create a function that
 * takes an index and prints the even
 * fruits using a for loop starting
 * from that index
 *
 * @param {number} index number of which element to start in the array
 */
const printFor = (index) => {
  for (let i = index; i < fruits.length; i++) {
    if (i % 2 === 0) {
      console.log(fruits[i]);
    }
  }
};
printFor(0);
printFor(2);
console.log("--------------------");

/**
 * 👉 STEP 9: Create a function to print the odd fruits using a while loop
 *
 * @param {number} idx number of which element to start in the array
 */
function printWhile(idx) {
  while (idx < fruits.length) {
    if (idx % 2 !== 0) {
      console.log(fruits[idx]);
    }
    idx++;
  }
}
printWhile(0);
printWhile(2);
