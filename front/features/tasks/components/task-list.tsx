import { Task } from "../type"
import { Button } from "@/components/ui/button"

type TaskListProps = {
  tasks: Task[];
}

export const TaskList = ({ tasks }: TaskListProps) => {
  return (
    <div>
      {
        tasks.map(task => (
          <div className="flex" key={task.id}>
            <div>
              <p>{task.name}</p>
              <p>{task.isDone ? "完了" : "未完了"}</p>
            </div>
            <Button>削除</Button>
          </div>
        ))
      }
    </div>
  )
}