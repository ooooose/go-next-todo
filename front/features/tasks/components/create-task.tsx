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
    <div className="">
      <div className="flex gap-2 mx-auto">
        <Input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="新しいタスクを入力"
          className="w-36"
        />
        <Button onClick={handleCreateTask} size="icon" disabled={name === ""} className="px-4">
          <Plus className="size-4" /> 作成
        </Button>
      </div>
    </div>
  )
}