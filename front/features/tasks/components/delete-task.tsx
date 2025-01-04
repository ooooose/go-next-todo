import { Button } from "@/components/ui/button"

import { deleteTask, getTasks } from "../api"
import { Task } from "../type";
import { Dispatch, SetStateAction } from "react";

type DeleteTaskProps = {
  id: string;
  setTasks: Dispatch<SetStateAction<Task[]>>
}

export const DeleteTask = ({ id, setTasks }: DeleteTaskProps) => {
  const handleDeleteTask = async () => {
    await deleteTask(id).then(async () => {
      const tasks = await getTasks()
      setTasks(tasks)
    })
  }

  return <Button variant="destructive" onClick={handleDeleteTask}>削除</Button>
}