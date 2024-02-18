require("dotenv").config(); // Load environment variables from .env file
const express = require("express");
const axios = require("axios");
const app = express();

app.get("/health", (req, res) => {
  res.send(`
    <h1>Server is Healthy!</h1>
  `);
});

app.listen(3000, () => console.log("Listening on port 3000"));
