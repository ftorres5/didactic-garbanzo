//import recipes from data.js
const recipes = require("./data");
//import path to be able to add styles to our application via index.html
const path = require("path");

//initialize express server
const express = require("express");
const server = express();

//initialize port constant
const PORT = 8080;

//allows us to be able to use style files
server.use(express.static(path.join(__dirname, "public")));

//GET /
//returns index.html
server.get("/", (req, res) => {
  // serve up the public folder as static index.html file
  res.sendFile(__dirname + "/public/index.html");
});

//GET /api/recipes
//returns all recipes
server.get("/api/recipes", (req, res) => {
  //return recipes array as the response
  res.send(recipes);
});

//GET /api/recipes/meal
//returns all recipes that have a mealType equal to the query string passed
server.get("/api/recipes/meal", (req, res) => {
  //get the name from the request
  const mealType = req.query.type;

  //find the recipe in the recipes array
  const recipe = recipes.filter((recipe) => recipe.mealType.includes(mealType));

  //return the recipe as the response
  res.send(recipe);
});

//GET /api/recipes/:name
//returns all recipes with the given name
server.get("/api/recipes/:name", (req, res) => {
  //get the name from the request
  const recipeName = req.params.name;

  //find the recipe in the recipes array
  //ignore capitalization
  const recipe = recipes.filter(
    (recipe) => recipe.name.toLowerCase() === recipeName.toLowerCase()
  );

  //return the recipe as the response
  res.send(recipe);
});

//server listens on port 8080
server.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
