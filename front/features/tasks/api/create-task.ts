import { api } from "@/lib/api/api-client";

export const createTask = async (task: { title: string }) => {
  return await api.post("/tasks", task);
}