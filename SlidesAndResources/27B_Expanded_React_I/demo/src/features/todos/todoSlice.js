// 👉 STEP 6: Import createSlice from @reduxjs/toolkit
import { createSlice } from "@reduxjs/toolkit";

// 👉 STEP 7: Set the initial state of tasks to an empty array
const initialState = {};

const todoSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    // 👉 STEP 8: Update addTodo so that it adds the todo passed in action.payload to the state
    addTodo: (state, action) => {},
    setTodos: (state, { payload }) => {
      state.tasks = payload;
    },
  },
});

export const { addTodo, setTodos } = todoSlice.actions;

export const getTasks = (state) => state.todos.tasks;

export default todoSlice.reducer;
