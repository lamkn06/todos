import { TaskState } from "../store/task";

export interface ApplicationRootState {
  readonly task: TaskState;
}
