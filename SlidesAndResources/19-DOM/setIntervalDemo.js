

// function that logs "hi"
function logHi() {
  console.log("hi")
}

// save this to clear
const intervalId = setInterval(logHi, 1000)

// function to stop process
function stop() {
  clearInterval(intervalId);
}

// stop process after 6 seconds
setTimeout(stop, 6000)
