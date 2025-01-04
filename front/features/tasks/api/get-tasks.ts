import { api } from "@/lib/api/api-client"

export const getTasks = async () => {
  return await api.get("/tasks")
}