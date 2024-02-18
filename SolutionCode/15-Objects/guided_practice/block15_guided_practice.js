// Solution for Block 16 Guided Practice.

// Prompt 1 Solution
const dinner = {
  hamburger: 12,
  steak: 20,
  soup: 8,
  macAndCheese: 14,
  soupAndSalad: 16,
};

// Prompt 2 Solution
console.log(Object.keys(dinner));

// Prompt 3 Solution
console.log(Object.values(dinner));

// Prompt 4 Possible Solution 1:

let totalCost = 0;

for (const individualItem in dinner) {
  totalCost += dinner[individualItem];
}
console.log(totalCost);

// Prompt 4 Possible Solution 2:

const prices = Object.values(dinner);
totalCost = 0;

for (let i = 0; i < prices.length; i++) {
  totalCost += prices[i];
}
console.log(totalCost);

// Prompt 5 Possible Solution
function calculateCost(meal) {
  let total = 0;
  for (const individualItem in meal) {
    total += meal[individualItem];
  }
  return total;
}

console.log(calculateCost(dinner));
