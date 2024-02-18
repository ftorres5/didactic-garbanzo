const API_URL = `http://localhost:8080/api`;

const state = {
  recipes: [],
};

/**
 * Fetches all recipes from the API.
 * @returns {Object[]} the array of recipe objects
 */
const fetchAllrecipes = async () => {
  try {
    const response = await fetch(`${API_URL}/recipes`);
    const json = await response.json();
    renderAllrecipes(json);
  } catch (err) {
    console.error("Uh oh, trouble fetching recipes!", err);
  }
};

//DOM elements
const $main = document.querySelector("main");

const createCard = ({
  name,
  difficulty,
  servings,
  cuisine,
  image,
  rating,
  mealType,
}) => {
  //create elements
  const card = document.createElement("section");
  const div = document.createElement("div");
  const nameHeader = document.createElement("h2");
  const difficultyInfo = document.createElement("p");
  const servingsInfo = document.createElement("p");
  const cuisineInfo = document.createElement("p");
  const ratingInfo = document.createElement("p");
  const mealInfo = document.createElement("ul");
  const img = document.createElement("img");

  //add classnames to the elements
  card.className = "card";

  const elements = [
    { element: nameHeader, info: name },
    { element: difficultyInfo, info: `Difficulty: ${difficulty}` },
    { element: servingsInfo, info: `Servings: ${servings}` },
    { element: cuisineInfo, info: `Cuisine Type: ${cuisine}` },
    { element: ratingInfo, info: `Rating: ${rating}` },
    { element: mealInfo, info: mealType },
    { element: img, info: image },
  ];

  //add recipe information to the elements
  //add the elements to the DOM
  elements.forEach(({ element, info }) => {
    if (element !== img && element !== mealInfo) {
      element.textContent = info;
    } else if (element !== mealInfo) {
      element.src = info;
    } else {
      element.textContent = "Meal Types:";
      info.forEach((type) => {
        const li = document.createElement("li");
        li.textContent = type;
        element.appendChild(li);
      });
    }

    div.appendChild(element);
  });

  card.appendChild(div);

  //return the new DOM card
  return card;
};

/**
 * Updates `<main>` to display a list of all recipes.
 */
const renderAllrecipes = (recipeList) => {
  //clears the page of any previous elements
  $main.replaceChildren();

  //check if the list has recipes
  if (recipeList.length < 1) {
    const message = document.createElement("h2");
    message.textContent = "No current recipes";
    $main.appendChild(message);
    return;
  }

  //render each recipe
  recipeList.forEach((recipe) => {
    const card = createCard(recipe);
    $main.appendChild(card);
  });
};

const render = async () => {
  await fetchAllrecipes();
};

render();
