// 👉 STEP 1:  Import reverseString from reverse-string.js
const { reverseString } = require("../index.js");

//👉 STEP 2: Add a describe() block for the function we will test
// describe() is used for grouping related tests
describe("reverseString", () => {
  //👉 STEP 3: Add a happy path test for the function
  // test() is used for an individual test case
  test("reverses single-word strings", () => {
    expect(reverseString("hello")).toEqual("olleh");
    expect(reverseString("world")).toEqual("dlrow");
  });

  //👉 STEP 3: Add a sad path test for the function
  // Try to test different scenarios that might break your implementation
  test("reverses multi-word strings", () => {
    expect(reverseString("hello world")).toEqual("dlrow olleh");
  });

  test("reverses strings with punctuation", () => {
    expect(reverseString("hello, world!")).toEqual("!dlrow ,olleh");
  });

  test("returns an empty string if given an empty string", () => {
    expect(reverseString("")).toEqual("");
  });
});
