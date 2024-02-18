# React Review App (Party Planner)

This is a React version of the Fullstack Party Planner workshop. If you'd like to complete it yourself from scratch, follow these steps:

* npm create vite@latest, cd <project-name>, npm install, npm run dev
* Use this URL adding your own name after /api/ to GET all events, POST a new event, and DELETE an event: https://fsa-crud-2aa9294fe819.herokuapp.com/api/jackie-test-3/events
* You have 2 options to keep the app state in sync
 - After a POST or DELETE, run another GET to fetch all of the events again (you can achieve this by passing the getEvents function down as props to subcomponents - this function will fetch all events and will then set the events state)
 - After a POST or a DELETE you can reset the event state - in order to achieve this, you'll have to pass down event state as a prop and for POST, use this syntax ```setEvents([...events, newEvent])``` and for DELETE, use this syntax ```setEvents(events.filter((event) => event.id !== e.id))```. In the delete, ```e``` is the event we're deleting.

[Component Diagram](https://ibb.co/MG00LNc)
