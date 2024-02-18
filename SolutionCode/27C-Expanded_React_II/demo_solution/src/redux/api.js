import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const baseUrl = "https://fsa-crud-2aa9294fe819.herokuapp.com/api/jackie-test-4"

export const eventsApi = createApi({
  reducerPath: "eventApi",
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: (builder) => ({
    getEvents: builder.query({
      query: () => `events`,
      providesTags: ['Event']
    }),
    addEvent: builder.mutation({
      query: (body) => ({
        url: `events`,
        method: 'POST',
        body
      }),
      invalidatesTags: ['Event'],
    }),
    deleteEvent: builder.mutation({
      query: (id) => ({
        url: `events/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['Event'],
    }),
  }),
  // Can add middleware here if desired
  // middleware:
});

export const { useGetEventsQuery, useAddEventMutation, useDeleteEventMutation } = eventsApi
