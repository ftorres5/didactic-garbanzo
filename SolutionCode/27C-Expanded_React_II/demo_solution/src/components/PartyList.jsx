
import { useGetEventsQuery, useDeleteEventMutation } from "../redux"

function PartyList() {

  const { data, loading, error } = useGetEventsQuery();
  const [ deleteEvent ] = useDeleteEventMutation()

  function handleDelete(e) {
    deleteEvent(e.id)
  }

  return (
    <>
      <div className="column">
        <h2>Party List</h2>
        {error ? <div>Error</div> : <div></div>}
        {loading ? <div>Loading</div> :
        <ul>
          {data?.data.map((event)=> {
            return (
              <li className="card" key={event.id}>
                <p><strong>Name: </strong>{event.name}</p>
                <p><strong>Description: </strong>{event.description}</p>
                <p><strong>Location: </strong>{event.location}</p>
                <p><strong>Date: </strong>{event.date}</p>
                <button onClick={() => handleDelete(event)}>Delete</button>
              </li>
            )
          })}
        </ul>
        }
      </div>
    </>
  )
}

export default PartyList
