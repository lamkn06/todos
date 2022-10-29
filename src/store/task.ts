import { createSlice } from "@reduxjs/toolkit";
import { TaskType } from "../types/task";

import { reducers } from "./task.reducers";

export interface TaskState {
  tasks: TaskType[];
}

export const initialState: TaskState = {
  tasks: [],
};

const task = createSlice({
  name: "move",
  initialState,
  reducers,
});

export const { addTask } = task.actions;

export default task.reducer;
