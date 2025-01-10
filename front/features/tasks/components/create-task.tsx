import { Dispatch, SetStateAction, useState } from "react"
import { createTask, getTasks } from "../api"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Task } from "../type"
import { Plus } from "lucide-react"

type CreateTaskProps = {
  setTasks: Dispatch<SetStateAction<Task[]>>
}

export const CreateTask = ({ setTasks }: CreateTaskProps) => {
  const [name, setName] = useState<string>("")

  const handleCreateTask = async () => {
    await createTask({ name: name }).then(async () => {
      const tasks = await getTasks()
      setTasks(tasks)
      setName("")
    })
  }

  return (
    <div className="flex justify-center">
      <div className="flex gap-2">
        <Input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="新しいタスクを入力"
          className="w-36"
        />
        <Button
          onClick={handleCreateTask}
          disabled={name === ""}
        >
          <Plus className="mr-2 size-4" />
          作成
        </Button>
      </div>
    </div>
  )
}