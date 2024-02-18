import { useState } from "react";
import { useAddEventMutation } from "../redux"

function AddPartyForm() {
  const [name, setName] = useState("");
  const [location, setLocation] = useState("");
  const [date, setDate] = useState("");
  const [description, setDescription] = useState("");
  const [ addEvent ] = useAddEventMutation()

  function handleSubmit(e) {
    e.preventDefault();
    addEvent({
      name,
      location,
      description,
      date: new Date(date)
    })
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
        <button onClick={handleSubmit} type="submit">Add Event</button>
      </form>
    </div>
    </>
  )
}

export default AddPartyForm
