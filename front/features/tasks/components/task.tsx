import { Dispatch, SetStateAction } from "react";
import type { Task as TaskType } from "../type";
import { Card, CardContent } from "@/components/ui/card";
import { DeleteTask } from "./delete-task";

type TaskProps = {
  index: number;
  task: TaskType;
  setTasks: Dispatch<SetStateAction<TaskType[]>>;
};

export const Task = ({ task, setTasks }: TaskProps) => {

  return (
    <Card className="mx-auto max-w-md">
      <CardContent className="p-4">
        <div className="flex justify-between items-center">
          <h2 className="text-lg">{task.name}</h2>
          <DeleteTask id={task.id} setTasks={setTasks} />
        </div>
      </CardContent>
    </Card>
  );
};
