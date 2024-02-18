require("dotenv").config();
const express = require("express");
const jwt = require("jsonwebtoken");
const app = express();
const PORT = process.env.PORT || 8080;

// init db client
const client = require("./db/client");
client.connect();

// init body-parser
const bodyParser = require("body-parser");
app.use(bodyParser.json());

// Check requests for a token and attach the decoded id to the request
app.use((req, res, next) => {
  const auth = req.headers.authorization;
  const token = auth?.startsWith("Bearer ") ? auth.slice(7) : null;

  try {
    req.user = jwt.verify(token, process.env.JWT);
  } catch {
    req.user = null;
  }

  next();
});

app.get("/", (req, res) => {
  res.send("Working!");
});

// Router: /api
app.use("/api", require("./api"));

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
