const express = require("express");
const jwt = require("jsonwebtoken");
const server = express();

// init body-parser
const bodyParser = require("body-parser");
server.use(bodyParser.json());

// Check requests for a token and attach the decoded id to the request
server.use((req, res, next) => {
  const auth = req.headers.authorization;
  const token = auth?.startsWith("Bearer ") ? auth.slice(7) : null;

  try {
    req.user = jwt.verify(token, process.env.JWT);
  } catch {
    req.user = null;
  }

  next();
});

// Router: /api
server.use("/api", require("./api"));

module.exports = server;
