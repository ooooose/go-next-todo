import { Dispatch, SetStateAction } from "react";
import type { Task as TaskType } from "../type";
import { DeleteTask } from "./delete-task";

type TaskProps = {
  index: number;
  task: TaskType;
  setTasks: Dispatch<SetStateAction<TaskType[]>>
};

export const Task = ({ index, task, setTasks }: TaskProps) => {
  return (
    <div className="flex" key={task.id}>
      <div className="flex gap-2">
        <p>{index + 1}</p>
        <p>{task.name}</p>
        <p>{task.isDone ? "完了" : "未完了"}</p>
      </div>
      <DeleteTask id={task.id} setTasks={setTasks} />
    </div>
  )
}