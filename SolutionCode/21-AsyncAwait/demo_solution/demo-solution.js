
async function getPlanets() {
  try {
    let planets = [];
    const response = await fetch("https://swapi.dev/api/planets/", {
      // this second argument of the fetch function is optional for get, can also just write await fetch("https://swapi.dev/api/planets/")
      method: "GET"
    });
    const jsonResponse = await response.json();
    planets = planets.concat(jsonResponse.results);

    let next = jsonResponse.next;

    while (next) {
      console.log("next in while: ", next)
      const nextPlanets = await fetch(next);
      const nextPlanetsJson = await nextPlanets.json();
      planets = planets.concat(nextPlanetsJson.results);
      next = nextPlanetsJson.next;
    }
    return planets;
  } catch(err) {
    console.error(err.message);
  }
}

function createElements(planets) {
  const list = document.getElementById("planets");
  planets.map((planet) => {
    const planetListItem = document.createElement("li");
    planetListItem.innerText = planet.name;
    list.appendChild(planetListItem);
  });
}

// pseudocode because starwars api doesn't support post, put, delete
async function createPlanet(planet) {
  const newPlanet = await fetch("https://swapi.dev/api/planets/", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: planet
  });
  const newPlanetJson = await newPlanet.json();
  return newPlanetJson;
}

async function render( ) {
  console.log("are we rendering")
  const planets = await getPlanets();
  console.log("planets: ", planets)
  createElements(planets);
}

render()
