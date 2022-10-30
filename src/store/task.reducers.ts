import { PayloadAction } from "@reduxjs/toolkit";
import uuid from "react-uuid";
import { TaskType } from "../types/task";
import { TaskState } from "./task";

export const reducers = {
  selectTask(state: TaskState, action: PayloadAction<TaskType>) {
    console.log(action.payload);
    state.task = action.payload;
  },
  addTask(
    state: TaskState,
    action: PayloadAction<{ name: string; description?: string }>,
  ) {
    const count = state.tasks.filter(
      (task) => task.status === "in-process",
    ).length;

    state.tasks = state.tasks.concat({
      id: uuid(),
      name: action.payload.name,
      description: action.payload.description,
      status: "in-process",
      order: count + 1,
      createAt: new Date().toDateString(),
    });
  },
  updateTask(state: TaskState, action: PayloadAction<TaskType>) {
    state.tasks = state.tasks.map((task) => {
      if (task.id === action.payload.id) {
        return action.payload;
      }
      return task;
    });
  },
  deleteTask(state: TaskState, action: PayloadAction<string>) {
    state.tasks = state.tasks.filter((task) => task.id !== action.payload);
  },
};
