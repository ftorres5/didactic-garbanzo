// 👉 STEP 4: Import configureStore from @reduxjs/toolkit
import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "./features/todos/todoSlice";

const store = configureStore({
  // 👉 STEP 5: create a reducer called todos that uses the todoReducer we imported
});

export default store;
