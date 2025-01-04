import { Dispatch, SetStateAction, useState } from "react"
import { createTask, getTasks } from "../api"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Task } from "../type"

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
    <div className="flex gap-2">
      <Input value={name} onChange={(e) => setName(e.target.value)} />
      <Button onClick={handleCreateTask} disabled={name === ""}>作成</Button>
    </div>
  )
}