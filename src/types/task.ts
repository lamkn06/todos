export type TaskStatus = "in-process" | "done" | "archive";

export interface TaskType {
  id: string;
  name: string;
  description?: string;
  status: TaskStatus;
}
