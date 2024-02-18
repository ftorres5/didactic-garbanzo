//import function we want to test from the file it's written
const { add } = require("./index.js");

//describe block with the title being the function we're testing
describe("add()", () => {
  //each it block is a test and what it tests is within the title of the test
  it("adds an array of 3 numbers correctly", () => {
    //the actual test
    //we expect when we call the function and pass [1, 2, 3] as an argument we get 6 back
    expect(add([1, 2, 3])).toBe(6);
  });

  it("adds an array of 2 numbers correctly", () => {
    expect(add([1000, 50])).toBe(1050);
  });

  it("adds an array of 1 number correctly", () => {
    expect(add([1])).toBe(1);
  });

  //we also want tests for unhappy paths to make sure when exit gracefully and don't crash
  it("returns 0 when an empty array is given", () => {
    expect(add([])).toBe(0);
  });

  it("returns 0 when no array is given", () => {
    expect(add()).toBe(0);
  });
});
