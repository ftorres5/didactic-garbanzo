/**
 * Prompt 1:
 * Write the code line that uses the `tobe` function
 * to expect a value of `17` for testing  the
 * function `LuckyNumber` with two parameters: `num1
 * = 5` and `num2 = 12`
 */

expect(LuckyNumber(5, 12)).toBe(17);

/**
 * how prompt 1 would look inside a test file
 * utilizing the describe block and an it statement
 * for each test on that particular method mentioned
 * in the describe block
 */
describe("LuckyNumber", () => {
  it("should return an integer", () => {
    expect(LuckyNumber(5, 12)).toBe(17);
  });
});

/**
 * Prompt 2:
 * Write the code line that uses the `not.tobe`
 * function for a value `8`. It tests a function
 * called `GetmeNumber` with two parameters: `num1 =
 * 7` and `num2 = 12`
 */

expect(GetmeNumber(7, 2)).not.toBe(8);

/**
 * how prompt 2 would look inside a test file
 * utilizing the describe block and an it statement
 * for each test on that particular method mentioned
 * in the describe block
 */
describe("GetmeNumber", () => {
  it("should return the correct number", () => {
    expect(GetmeNumber(7, 2)).not.toBe(8);
  });
});

/**
 * Prompt 3:
 * How can the `toBeCloseTo` function be used to test
 * the result of a function called `total`, which
 * adds two parameters together, where the first
 * parameter is 5.51021 and the second parameter is
 * `4.01123`, in order to expect a value close to `9.
 * 52`?
 */

/**
 * `toBeCloseTo` can be used to check that the addition of the 2
 * numbers is close to 9.52. We can utilize the function to
 * check for approximate equality based on the number of
 * digits we care about
 */

expect(total(5.51021, 4.01123)).toBeCloseTo(9.52);

/**
 * how prompt 3 would look inside a test file
 * utilizing the describe block and an it statement
 * for each test on that particular method mentioned
 * in the describe block
 */
describe("total", () => {
  it("should return a float", () => {
    expect(total(5.51021, 4.01123)).toBeCloseTo(9.52);
  });
});

/**
 * Prompt 4:
 * In the given object, check if `forSale` contains the key `nice.oven`
 * nested inside the value of the `kitchen` property. Also, check what is the
 * first item in `amenities` nested inside `kitchen` is "oven":
 *
 * const forSale = {
 *  bath: true,
 *  bedrooms: 4,
 *  kitchen: {
 *    amenities: ["oven", "stove", "washer"],
 *    area: 20,
 *    wallColor: "white",
 *    "nice.oven": true,
 *    },
 * };
 */

expect(forSale).toHaveProperty(["kitchen", "nice.oven"]);
expect(forSale).toHaveProperty(["kitchen", "amenities", 0], "oven");

/**
 * how prompt 4 would look inside a test file
 * utilizing the describe block and an it statement
 * for each test on that particular method mentioned
 * in the describe block
 */

describe("forSale", () => {
  it("should contain nice.oven in the kitchen property", () => {
    expect(forSale).toHaveProperty(["kitchen", "nice.oven"]);
  });

  it("should have oven as the first element in the amenities array inside the kitchen property", () => {
    expect(forSale).toHaveProperty(["kitchen", "amenities", 0], "oven");
  });
});
