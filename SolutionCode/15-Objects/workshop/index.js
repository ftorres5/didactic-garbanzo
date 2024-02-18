let inputFlavors = window.prompt(
  "Enter a list of comma-separated froyo flavors:"
);

const flavors = inputFlavors.split(",");

const getOrderCount = (order) => {
  const orderCount = {};
  for (let i = 0; i < order.length; i++) {
    if (!Object.keys(orderCount).includes(order[i])) {
      orderCount[order[i]] = 1;
    } else {
      orderCount[order[i]] += 1;
    }
  }

  return orderCount;
};

console.log(getOrderCount(flavors));
