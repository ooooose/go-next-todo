'use client'

import { useState, useEffect } from "react";

import { Task } from "../type"
import { Button } from "@/components/ui/button";
import { getTasks } from "../api";


export const TaskList = () => {
  const [tasks, setTasks] = useState<Task[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getTasks();
      setTasks(data);
    };
    fetchData();
  }, []);

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