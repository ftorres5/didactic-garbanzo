import { API_URL } from "../constants";

function SingleEvent({events, singleEvent, deleteEvent, getEvents, setEvents}) {

  async function deleteEvent(event) {
    try {
    await fetch(`${API_URL}/${event.id}`, {
      method: "DELETE"
    });
    // THIS resets the overall event state, filtering out the deleted event
    setEvents(events.filter((e) => {
      return e.id !== event.id
    }))
    // OR THIS does a refetch of events (if we don't use this, we don't need to pass down the getEvents prop from above)
    // await getEvents()
  } catch(e) {
    console.log(e)
  }
  }

  return (
    <div className="card">
      <p>{singleEvent.id}</p>
      <p>{singleEvent.name}</p>
      <p>{singleEvent.location}</p>
      <p>{singleEvent.description}</p>
      <p>{singleEvent.date}</p>
      <button onClick={() => deleteEvent(singleEvent)}>Delete Event</button>
    </div>
  )
}

export default SingleEvent;
