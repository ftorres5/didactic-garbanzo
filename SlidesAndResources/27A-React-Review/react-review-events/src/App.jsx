import './App.css'
import { EventList, AddEventForm } from "./Components"
import { useEffect, useState } from "react"
import { API_URL } from "./constants"

function App() {
  const [events, setEvents] = useState([]);

  async function getEvents() {
    const response = await fetch(API_URL);
    const json = await response.json();
    const data = json.data;
    setEvents(data);
  }
  useEffect(() => {
    getEvents();
  }, [])


  return (
    <>
      <div className="container">
        <EventList getEvents={getEvents} events={events} setEvents={setEvents}/>
        <AddEventForm getEvents={getEvents} events={events} setEvents={setEvents}/>
      </div>
    </>
  )
}

export default App
