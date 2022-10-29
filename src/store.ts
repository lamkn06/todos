import { configureStore } from "@reduxjs/toolkit";
import task from "./store/task";

const store = configureStore({
  reducer: {
    task,
  },
});

export default store;
