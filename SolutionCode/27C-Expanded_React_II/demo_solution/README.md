# Block 27C Demo

Complete the following steps using this [RTK Query Overview](https://redux-toolkit.js.org/rtk-query/overview) and these [RTK Query Examples](https://redux-toolkit.js.org/rtk-query/usage/examples).

1. Run ```npm i react-redux @reduxjs/toolkit```
2. Create a redux folder in the src folder with a store.js and api.js file.
3. In the api.js file, use createApi to create an eventsApi with 3 endpoints: getEvents, addEvent, and deleteEvent
4. Export the hooks for each query from the file
5. In the store.js file, create your redux store using configureStore, setting your reducer to your eventsApi reducer, and default middleware combined with any middleware from your eventsApi
6. Export your store
7. Add the Provider with your store to the main.jsx file (inside the React.StrictMode tags but outside the App tag).
8. Create 2 components- PartyList.jsx and AddPartyForm.jsx with some placeholder text
9. Mount those components in your App.jsx, and add some styling to put them side by side (form on the left, list on the right).
10. Use your redux hooks to fetch all parties in the list component, add a party in the form component, and delete individual parties also in the list component, where each party has a delete button.
11. Add providesTags and invalidatesTags to your endpoints inside your reducer so that you don't have to refresh the page when you make an update.
