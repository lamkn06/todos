import { createSlice } from "@reduxjs/toolkit";
import uuid from "react-uuid";
import { ApplicationRootState } from "../types";
import { TaskType } from "../types/task";

import { reducers } from "./task.reducers";

export interface TaskState {
  tasks: TaskType[];
  task: TaskType | null;
}

export const initialState: TaskState = {
  tasks: [
    {
      id: uuid(),
      name: "base one",
      status: "in-process",
      createAt: "10-30-2022",
      description: "dawoidjoaiwjdoiawdioadiowjdoija",
      order: 1,
    },
    {
      id: uuid(),
      name: "base two",
      status: "in-process",
      createAt: "10-30-2022",
      order: 2,
    },
  ],
  task: null,
};

const task = createSlice({
  name: "task",
  initialState,
  reducers,
});

export const selectInProcessTask = (
  state: ApplicationRootState,
): TaskType[] => {
  const { tasks } = state.task;
  return tasks.filter((task) => task.status === "in-process");
};

export const selectDoneTask = (state: ApplicationRootState): TaskType[] => {
  const { tasks } = state.task;
  return tasks.filter((task) => task.status === "done");
};

export const { addTask, selectTask } = task.actions;

export default task.reducer;
