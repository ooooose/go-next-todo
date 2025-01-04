import { api } from "@/lib/api/api-client";

export const createTask = async (task: { name: string }) => {
  return await api.post("/tasks", task);
}