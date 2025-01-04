import { api } from "@/lib/api/api-client"
import { Task } from "../type"

export const getTasks = async (): Promise<Task[]> => {
  try {
    return await api.get('/tasks');
  } catch (error) {
    console.error('Failed to fetch tasks:', error);
    return [];
  }
}