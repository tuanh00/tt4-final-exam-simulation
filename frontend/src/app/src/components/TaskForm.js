import { useState, useEffect } from 'react';

export default function TaskForm({ saveTask, selectedTask, cancelEdit }) {
  const [task, setTask] = useState({ title: '', description: '', completed: false });

  useEffect(() => {
    if (selectedTask) {
      setTask(selectedTask);
    } else {
      setTask({ title: '', description: '', completed: false });
    }
  }, [selectedTask]);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setTask({ ...task, [name]: type === 'checkbox' ? checked : value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    saveTask(task);
    setTask({ title: '', description: '', completed: false });
  };

  return (
    <form onSubmit={handleSubmit} className="mb-3">
      <input type="text" name="title" value={task.title} onChange={handleChange} className="form-control mb-2" placeholder="Title" required />
      <input type="text" name="description" value={task.description} onChange={handleChange} className="form-control mb-2" placeholder="Description" required />
      <div className="form-check mb-2">
        <input type="checkbox" name="completed" checked={task.completed} onChange={handleChange} className="form-check-input" />
        <label className="form-check-label">Completed</label>
      </div>
      <button className="btn btn-success me-2">Save</button>
      {selectedTask && (
        <button type="button" className="btn btn-secondary" onClick={cancelEdit}>
          Cancel
        </button>
      )}
    </form>
  );
}
