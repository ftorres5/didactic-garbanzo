const convertToMeters = (yards) => {
  return yards * 0.9144;
};

function createMessage(yards, meters) {
  let message = "I don't know how long that is...";
  const numYards = yards * 1;

  if (numYards === 1760) {
    message = "That is as long as a mile";
  } else if (numYards === 100) {
    message = "That is as long as a football field";
  } else if (numYards === 26) {
    message = "That is as long as a tennis court!";
  }

  message += `\nYou've converted ${yards} yards to ${meters} meters `;
  return message;
}

let inputYards = window.prompt("Enter number of yards to convert to meters:");

const meters = convertToMeters(inputYards);

const output = createMessage(inputYards, meters);
console.log(output);
