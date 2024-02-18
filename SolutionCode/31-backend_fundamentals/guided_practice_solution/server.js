//initialize express server
const express = require("express");
const server = express();
//import path to be able to add styles to our application via index.html
const path = require("path");
//initialize port constant
const PORT = 8080;

//allows us to be able to send index.html file
server.use(express.static(path.join(__dirname, "/public/index.html")));

//GET /
//returns index.html
server.get("/", (req, res) => {
  // serve up the public folder as static index.html file
  res.sendFile(__dirname + "/public/index.html");
});

//GET /hello
//returns "Hello World!"
server.get("/hello", (req, res) => {
  res.send("Hello World!");
});

//GET /hello-query
//returns "Hello name" --> Ex. GET /hello-query?name=jackie will return "Hello jackie"
server.get("/hello-query", (req, res) => {
  res.send(`Hello ${req.query.name}`);
});

//GET /hello/:name
//returns "Hello name" --> Ex. GET /hello/jessica will return "Hello jessica"
server.get("/hello/:name", (req, res) => {
  res.send(`Hello ${req.params.name}`);
});

//server listens on port 8080
server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
