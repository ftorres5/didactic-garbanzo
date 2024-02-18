//example freelancers
const freelancers = [
  { name: "Dr. Slice", price: 25, occupation: "Gardener" },
  { name: "Dr. Pressure", price: 51, occupation: "Programmer" },
  { name: "Prof. Possibility", price: 43, occupation: "Teacher" },
  { name: "Prof. Prism", price: 81, occupation: "Teacher" },
  { name: "Dr. Impulse", price: 43, occupation: "Teacher" },
  { name: "Prof. Spark", price: 76, occupation: "Programmer" },
  { name: "Dr. Wire", price: 47, occupation: "Teacher" },
  { name: "Prof. Goose", price: 72, occupation: "Driver" },
];

//possible names
const names = [
  "Aria",
  "Elijah",
  "Olivia",
  "Jackson",
  "Sophia",
  "Liam",
  "Emma",
  "Mason",
  "Isabella",
  "Lucas",
];

//possible occupations
const occupations = [
  "Software Developer",
  "Teacher",
  "Nurse",
  "Mechanical Engineer",
  "Graphic Designer",
  "Chef",
  "Marketing Analyst",
  "Electrician",
  "Physician",
  "Data Scientist",
];

function main() {
  //grab the div with the id of "root"
  const root = document.querySelector("#root");

  //create a new h1 element that says "Freelancer Forum"
  const h1 = document.createElement("h1");
  h1.innerHTML = "Freelancer Forum";

  //append the h1 element to the root div
  root.appendChild(h1);

  //create div with id to be able to select this area to re-render the average price
  const priceDiv = document.createElement("div");
  priceDiv.setAttribute("id", "avg-price");
  root.appendChild(priceDiv);

  renderAveragePrice();

  //create a new h2 element that says "Available Freelancers"
  const h2 = document.createElement("h2");
  h2.innerHTML = "Available Freelancers";

  //append the h2 element to the root div
  root.appendChild(h2);

  //create table, thead and tbody elements
  const freelancerTable = document.createElement("table");
  const thead = document.createElement("thead");
  const tbody = document.createElement("tbody");

  //create table headers
  for (let key of Object.keys(freelancers[0])) {
    const th = document.createElement("th");
    const header = document.createTextNode(key);

    thead.appendChild(th).appendChild(header);
  }

  //add the thead, tbody to the table
  freelancerTable.appendChild(thead);
  freelancerTable.appendChild(tbody);
  //add the table to the root div
  root.appendChild(freelancerTable);

  //renders the table body information
  renderFreelancers();
}

const renderAveragePrice = () => {
  //get container holding average price
  const priceDiv = document.querySelector("#avg-price");
  //get average price
  const averagePrice = calculateAverage(freelancers);
  //create container for average price
  const p = document.createElement("p");
  p.innerHTML = `The average starting price is $${averagePrice}`;

  priceDiv.replaceChildren(p);
};

function renderFreelancers() {
  //select the table body
  const freelancerTable = document.querySelector("tbody");

  const freelancerElements = freelancers.map((person) => {
    const row = document.createElement("tr");

    const p_name = document.createElement("td");
    p_name.innerHTML = person.name;

    const p_price = document.createElement("td");
    p_price.innerHTML = `$${person.price}`;

    const p_occ = document.createElement("td");
    p_occ.innerHTML = person.occupation;

    row.appendChild(p_name);
    row.appendChild(p_price);
    row.appendChild(p_occ);

    return row;
  });

  //replace the table body with the new children elements
  freelancerTable.replaceChildren(...freelancerElements);
}

function calculateAverage(arr) {
  //get average of all freelancers in array
  const price =
    arr.reduce((total, person) => total + person.price, 0) / arr.length;

  //return number fixed to 2 digits after the decimal point
  return price.toFixed(2);
}

const addFreelancer = () => {
  //get random price for new freelancer
  const price = Math.round(Math.random() * 100);
  //get random name for new freelancer
  const name = names[Math.floor(Math.random() * names.length)];
  //get random occupation for new freelancer
  const occupation =
    occupations[Math.floor(Math.random() * occupations.length)];

  freelancers.push({ name, price, occupation });

  //re-render the average price
  renderAveragePrice();
  //re-render the freelancer table body
  renderFreelancers();

  //stop adding freelancers once we have 20
  if (freelancers.length > 20) {
    clearInterval(addFreelancerInterval);
  }
};

// `setInterval` will call `addFreelancer` every 1000 milliseconds (1 second)
const addFreelancerInterval = setInterval(addFreelancer, 1000);

//call the main function
main();
