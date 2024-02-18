# Guided Practice - Jest Testing 

This exercise will allow you to practice some Jest syntax for various use cases. Refer to the [Jest documentation](https://jestjs.io/docs/getting-started) as needed. 

## Steps
1. Write the code line that uses the `tobe` function to expect a value of `17` for testing  the function `LuckyNumber` with two parameters: `num1 = 5` and `num2 = 12`
2. Write the code line that uses the `not.tobe` function for a value `8`. It tests a function called `GetmeNumber` with two parameters: `num1 = 7` and `num2 = 12`
3. How can the `toBeCloseTo` function be used to test the result of a function called `total`, which adds two parameters together, where the first parameter is 5.51021 and the second parameter is `4.01123`, in order to expect a value close to `9.52`?
4. In the given function, check if `forSale` contains the key `nice.oven` nested inside the value of the kitchen property. Also, check what is the first item in `amenities` nested inside `kitchen` is "oven":
```js
const forSale = {
  bath: true,
  bedrooms: 4,
  kitchen: {
    amenities: ["oven", "stove", "washer"],
    area: 20,
    wallColor: "white",
    "nice.oven": true,
  },
};
```