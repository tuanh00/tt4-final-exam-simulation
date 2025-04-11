import React, { useEffect, useState } from 'react';
import { getTasks, deleteTask } from '../services/taskService';
import TaskCard from './TaskCard';

export default function TaskList({ onEdit }) {
  const [tasks, setTasks] = useState([]);

  const loadTasks = async () => {
    const res = await getTasks();
    setTasks(res.data);
  };

  useEffect(() => {
    loadTasks();
  }, []);

  const handleDelete = async (id) => {
    await deleteTask(id);
    loadTasks();
  };

  return (
    <div className="row">
      {tasks.map(task => (
        <TaskCard key={task.taskId} task={task} onDelete={handleDelete} onEdit={onEdit} />
      ))}
    </div>
  );
}
