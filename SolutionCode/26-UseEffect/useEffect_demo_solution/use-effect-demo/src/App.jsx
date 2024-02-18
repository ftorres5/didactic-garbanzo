import { useState, useEffect } from 'react'
import './App.css'
import { BASE_API_URL } from "../constants"

// 1. Display an all planets section, listing all planet names and a selected planet section displaying just the selected planet info
// 2. When we click on a planet name, we want to show that planet info in the selected planet section

function App() {
  // replace with selected planet state
  const [planets, setPlanets] = useState([]);
  const [selectedPlanetUrl, setSelectedPlanetUrl] = useState("")
  const [selectedPlanet, setSelectedPlanet] = useState({})

  useEffect(() => {
    async function getAllPlanets() {
      try {
        const response = await fetch(BASE_API_URL);
        const json = await response.json();
        setPlanets(json.results);
      } catch(err) {
        console.error(err);
      }
    }
    getAllPlanets();
  }, []);

  useEffect(() => {
    async function getSinglePlanet() {
      try {
        // since use effect runs on render by default (and then only runs if something in the dependency array changes, we want to check if the selectedPlanetUrl state exists before we make the API call)
        if (selectedPlanetUrl) {
          const response = await fetch(selectedPlanetUrl);
          const json = await response.json();
          setSelectedPlanet(json);
        }
      } catch(err) {
        console.error(err);
      }
    }
    getSinglePlanet();
  }, [selectedPlanetUrl]);

  function selectPlanet(url) {
    setSelectedPlanetUrl(url);
  }

  return (
    <>
      <h1>Planets</h1>
      <h2>Selected Planet</h2>
      {selectedPlanet.name ? <div className="card">
        <div>
          <p>Name: {selectedPlanet.name}</p>
          <p>Climate: {selectedPlanet.climate}</p>
          <p>Gravity: {selectedPlanet.gravity}</p>
        </div>
      </div> : <div>No planet selected</div>}
      <div className="card">
      <h2>All Planets</h2>
        {planets.length ? planets.map((planet, i) => {
          return <button onClick={() => selectPlanet(planet.url)} key={i}>{planet.name}</button>
        }) : <div>Loading</div>}
      </div>
    </>
  )
}

export default App
