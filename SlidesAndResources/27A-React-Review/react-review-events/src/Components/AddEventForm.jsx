import { useState } from "react";
import { API_URL } from "../constants"

function AddEventForm({getEvents, setEvents, events}) {
  // state to manage form (all update on change for each input)
  const [name, setName] = useState("");
  const [location, setLocation] = useState("");
  const [date, setDate] = useState("");
  const [description, setDescription] = useState("");

  async function handleSubmit(e) {
    try {
      const newEvent = await fetch(API_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          name: name,
          location: location,
          description: description,
          date: new Date(date)
        })
    });
    const newEventJson = await newEvent.json();
    // THIS sets the events to the combination of the previous event state plus the newly added event
    setEvents([...events, newEventJson.data])
    // OR THIS does a refetch of events (if we don't use this, we don't need to pass down the getEvents prop from above)
    // await getEvents()
  } catch(e) {
    console.log(e)
  }
  }

 return (
  <>
    <div className="column">
      <h2>Add event form</h2>
      <form className="column">
        <label>Name:</label>
        <input onChange={(e) => setName(e.target.value)} name="name"></input>
        <label>Description:</label>
        <input onChange={(e) => setDescription(e.target.value)} name="description"></input>
        <label>Location:</label>
        <input onChange={(e) => setLocation(e.target.value)} name="location"></input>
        <label>Date:</label>
        <input onChange={(e) => setDate(e.target.value)} name="date" type="datetime-local"></input>
        <button onClick={(e)=> handleSubmit(e)} type="submit">Add Event</button>
      </form>
    </div>
  </>
 )
}

export default AddEventForm;
