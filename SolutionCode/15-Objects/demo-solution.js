// If you run this entire file, you'll see the expected results logged for each function call.

const user = {
  name_first: "Jackie",
  name_last: "Levine",
  phone: "7789188724",
  email: "jackie.levine@fullstackacademy.com",
}

// Step 1

function stringifyObject(obj) {
  // JSON.stringify turns an object into a string (deserialize)
  return JSON.stringify(obj);
}

console.log("stringifyObject result: ",stringifyObject(user));

const stringifiedObj = stringifyObject(user);

// Step 2

function jsonifyString(strObj) {
  // JSON.parse turns a string into an object (serialize)
  return JSON.parse(strObj);
}

console.log("jsonifyString result: ", jsonifyString(stringifiedObj))

// Step 3

function logValuesOne(obj) {
  // obj = user
  // Loop over object key/value pairs, log the value
  for (const key in obj) {
    console.log("in log values one: ", obj[key]);
  }
}

console.log("logValuesOneResult: ")
logValuesOne(user);

function logValuesTwo(obj) {
  // Set array = Object.values(obj)
  // loop through array, log each element
  const valuesArray = Object.values(obj);
  for (let i = 0; i < valuesArray.length; i++) {
    console.log("in log values two: ", valuesArray[i]);
  }
}

console.log("logValuesTwoResult: ")
logValuesTwo(user);

// Step 4

function logKeysOne(obj) {
  for (const key in obj) {
    console.log(key);
  }
}
console.log("logKeysOneResult: ")
logKeysOne(user);

function logKeysTwo(obj) {
  const keys = Object.keys(obj);
  for (let i = 0; i < keys.length; i++) {
    console.log(keys[i]);
  }
}

console.log("logKeysTwoResult: ")
logKeysTwo(user);

// Step 5

const cart = ["tee-shirt",  "pants", "scarf", "scarf", "scarf", "shoes", "tee-shirt", "shoes"];

function mapOrder(elements) {
  const map = {};
  for (let i = 0; i < elements.length; i++) {
    if (map[elements[i]]) {
      // += also works or ++ in beginning
      // update a key value pair in map
      map[elements[i]]++;
    } else {
      // set new key value pair in map
      map[elements[i]] = 1;
    }
  }
  return map;
}

console.log("mapOrder result: ", mapOrder(cart));

// Step 6

function addKeyValuePair(obj, keyArg, val) {
  const newObj = {}
  for (const key in obj) {
    newObj[key] = obj[key];
  }
  newObj[keyArg] = val;
  return newObj
}

console.log("add key value pair result: ", addKeyValuePair(user, "username", "jroyankfan42"));

// Step 7
const students = [
  {
    name_first: "Jess",
    name_last: "Duell"
  },
  {
    name_first: "Caitlin",
    name_last: "Lamprecht"
  },
  {
    name_first: "Doobin",
    name_last: "Lee"
  }
]

function getFirstNames(array) {
  const firstNames = [];
  for (let i = 0; i < array.length; i++) {
    firstNames.push(array[i].name_first);
  }
  return firstNames;
}

console.log("getFirstNames result: ", getFirstNames(students))
