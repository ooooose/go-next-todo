export type Task = {
  id: string;
  title: string;
  description: string;
  status: "todo" | "doing" | "done";
  createdAt: string;
  updatedAt: string;
}