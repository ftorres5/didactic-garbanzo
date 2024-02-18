import { configureStore } from "@reduxjs/toolkit";
import { eventsApi } from "./api"

const store = configureStore({
  reducer: {
    [eventsApi.reducerPath]: eventsApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(eventsApi.middleware),
});

export default store;
