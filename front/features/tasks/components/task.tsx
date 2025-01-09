import { Dispatch, SetStateAction } from "react";
import type { Task as TaskType } from "../type";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle2, Circle } from 'lucide-react'
import { DeleteTask } from "./delete-task";

type TaskProps = {
  index: number;
  task: TaskType;
  tasks: TaskType[];
  setTasks: Dispatch<SetStateAction<TaskType[]>>
};

export const Task = ({ task, tasks, setTasks }: TaskProps) => {
  const toggleTodo = (id: string) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, isDone: !task.isDone } : task
      )
    )
  }
  return (
    <Card className="mt-4">
      <CardContent className="p-4">
        <div className="flex items-center justify-between gap-4">
          <button
            onClick={() => toggleTodo(task.id)}
            className="flex items-center gap-3 flex-1"
          >
            {task.isDone ? (
              <CheckCircle2 className="h-5 w-5 text-green-500" />
            ) : (
              <Circle className="h-5 w-5 text-gray-400" />
            )}
            <span
              className={`${
                task.isDone ? "line-through text-gray-400" : ""
              }`}
            >
              {task.name}
            </span>
          </button>
          <DeleteTask id={task.id} setTasks={setTasks} />
        </div>
      </CardContent>
    </Card>
  )
}