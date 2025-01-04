import { Button } from "@/components/ui/button";
import type { Task as TaskType } from "../type";

type TaskProps = {
  task: TaskType;
};

export const Task = ({ task }: TaskProps) => {
  return (
    <div className="flex">
      <div>
        <p>{task.name}</p>
        <p>{task.isDone ? "完了" : "未完了"}</p>
      </div>
      <Button>削除</Button>
    </div>
  )
}