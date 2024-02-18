require("dotenv").config();
const express = require("express");
const app = express();
const PORT = process.env.PORT || 8080;

// init body-parser
const bodyParser = require("body-parser");
app.use(bodyParser.json());

// init db client
const client = require("./db/client");
client.connect();

app.get("/", (req, res) => {
  res.send("Working!");
});

// Router: /api
app.use("/api", require("./api"));

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
