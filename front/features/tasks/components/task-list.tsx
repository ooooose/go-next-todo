'use client'

import { useState, useEffect } from "react";

import { Task } from "../type"

import { Task as TaskComponent } from "./task";
import { getTasks } from "../api";
import { CreateTask } from "./create-task";


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
      <CreateTask setTasks={setTasks} />
      <div className="py-5">
        {
          tasks.map((task, index) => (
            <TaskComponent key={task.id} index={index} task={task} setTasks={setTasks} />
          ))
        }
      </div>
    </div>
  )
}