import { api } from "@/lib/api/api-client";

export const deleteTask = async (id: string) => {
  return await api.delete(`/tasks/${id}`);
};