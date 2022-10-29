import { PayloadAction } from "@reduxjs/toolkit";
import { TaskType } from "../types/task";
import { TaskState } from "./task";

export const reducers = {
  addTask(state: TaskState, action: PayloadAction<TaskType>) {
    state.tasks = state.tasks.concat(action.payload);
  },
};
