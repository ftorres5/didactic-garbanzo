require("dotenv").config(); // Load environment variables from .env file
const express = require("express");
const axios = require("axios");
const app = express();
const bcrypt = require('bcrypt');

// THESE SHOULD GO IN A .env FILE AND ACCESSED WITH process.env... THESE ARE MY CREDENTIALS, YOU SHOULD USE YOUR OWN
const GITHUB_CLIENT_ID = "9f7173f4052c29d47f1c";
const GITHUB_CLIENT_SECRET = "3b92236585981aff792cad7c54ec8bd6c7be0328";
const SALT_ROUNDS = 10;

app.get("/", (req, res) => {
  res.send(`
    <h1>Welcome to our Application</h1>
    <a href="/login/github">Login with GitHub</a>
  `);
});

app.get("/health", (req, res) => {
  res.send(`
    <h1>Server is Healthy!</h1>
  `);
});

app.get("/user", (req, res) => {
  const token = req.query.access_token; // Retrieve the access token from the query parameters
  res.send(`
    <h1>Authenticated User Page</h1>
    <p>Your GitHub Access Token: ${token}</p>
  `);
});

app.get("/login/github", (req, res) => {
  const githubUrl = `https://github.com/login/oauth/authorize?client_id=${GITHUB_CLIENT_ID}&scope=user`; // Construct the GitHub authorization URL with client ID and scope
  res.redirect(githubUrl); // Redirect the user to the GitHub authorization URL
});

app.get("/login/github/callback", async (req, res) => {
  const body = {
    client_id: GITHUB_CLIENT_ID, // Client ID used in the request
    client_secret: GITHUB_CLIENT_SECRET, // Client secret used in the request
    code: req.query.code, // Authorization code obtained from the query parameters
  };
  const opts = { headers: { accept: "application/json" } }; // Specify the request headers
  const response = await axios.post(
    `https://github.com/login/oauth/access_token`, // GitHub token exchange endpoint
    body,
    opts
  );

  const access_token = response.data.access_token; // Retrieve the access token from the response

  // Redirect to frontend with the access token
  res.redirect(`/user?access_token=${access_token}`);
});

app.get("/bcrypt-register", async (req, res) => {
  const { password } = req.query;
  const salt = await bcrypt.genSalt(SALT_ROUNDS);
  const hashedPassword = await bcrypt.hash(
    password,
    salt
  );
  res.send(hashedPassword);
});

app.get("/bcrypt-login", async (req, res) => {
  const {password, hashedPassword} = req.query;
  const isSamePassword = await bcrypt.compare(password, hashedPassword);
  res.send(isSamePassword);
});

app.listen(3000, () => console.log("Listening on port 3000"));
