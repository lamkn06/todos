export type TaskStatus = "in-process" | "done";

export interface TaskType {
  id: string;
  name: string;
  description?: string;
  status: TaskStatus;
  order: number;
  createAt: string;
}
