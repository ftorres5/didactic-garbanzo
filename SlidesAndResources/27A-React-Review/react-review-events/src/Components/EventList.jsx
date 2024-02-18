import { SingleEvent } from "./";

function EventList({getEvents, events, setEvents}) {

  return (
    <>
    <div className="column">
      <h2>Event List</h2>
      <div className="column">
      {events.map((e) => {
        return (
          <SingleEvent getEvents={getEvents} events={events} setEvents={setEvents} key={e.id} singleEvent={e}/>
        )
      })}
      </div>
    </div>
    </>
  )
}

export default EventList;
