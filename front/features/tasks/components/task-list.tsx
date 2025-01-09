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
    <div className="w-full">
      <h1 className="text-2xl font-bold text-white mb-8">
        TODOアプリ
      </h1>
      <CreateTask setTasks={setTasks} />
      {
        tasks.map((task, index) => (
          <TaskComponent key={task.id} index={index} task={task} tasks={tasks} setTasks={setTasks} />
        ))
      }
    </div>
  )
}