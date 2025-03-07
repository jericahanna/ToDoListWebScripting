"use client";

import { useState } from "react";
import Task from "@/app/Tasks";

interface TaskItem {
  id: number;
  text: string;
  rank: number;
}

export default function TodoApp() {
  const [tasks, setTasks] = useState<TaskItem[]>([]);
  const [taskText, setTaskText] = useState("");
  const [taskRank, setTaskRank] = useState<number>(1);

  const addTask = () => {
    if (taskText.trim() === "") return;
    setTasks([...tasks, { id: Date.now(), text: taskText, rank: taskRank }]);
    setTaskText("");
    setTaskRank(1);
  };

  const removeTask = (id: number) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white p-6 rounded-lg shadow-lg w-96">
        <h1 className="text-xl font-bold mb-4">To-Do List</h1>
        <div className="flex mb-4">
          <input type="text" className="border p-2 flex-grow rounded-l" value={taskText}onChange={(e) => setTaskText(e.target.value)}
            placeholder="Enter a task..."
          />
          <input type="number" className="border p-2 w-16 mx-2 rounded" value={taskRank} onChange={(e) => setTaskRank(Number(e.target.value))}  min="1"
          />
          <button className="bg-blue-500 text-white px-4 py-2 rounded-r" onClick={addTask}> Add</button>
        </div>
        <ul>
          {tasks
            .sort((a, b) => a.rank - b.rank)
            .map((task) => (
              <Task key={task.id} task={task} onRemove={removeTask} />
            ))}
        </ul>
      </div>
    </div>
  );
}
