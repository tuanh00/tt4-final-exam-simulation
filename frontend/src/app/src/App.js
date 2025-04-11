import { useState } from 'react';
import TaskList from './components/TaskList';
import TaskForm from './components/TaskForm';
import { createTask, updateTask } from './services/taskService';

export default function App() {
  const [activeTab, setActiveTab] = useState('list'); // default show list
  const [reloadList, setReloadList] = useState(false); // to reload tasks
  const [selectedTask, setSelectedTask] = useState(null); // for edit mode

  const handleAddSuccess = () => {
    setActiveTab('list');
    setReloadList(!reloadList); // reload after add/edit
    setSelectedTask(null); // reset
  };

  const saveTask = async (task) => {
    if (task.taskId) {
      await updateTask(task.taskId, task); // update
    } else {
      await createTask(task); // create new
    }
    handleAddSuccess();
  };

  const handleEdit = (task) => {
    setSelectedTask(task);
    setActiveTab('form');
  };

  const cancelEdit = () => {
    setSelectedTask(null);
    setActiveTab('list');
  };

  return (
    <div className="container py-5">
      <h2 className="mb-4 text-center">Todo Task App</h2>

      <ul className="nav nav-tabs mb-4">
        <li className="nav-item">
          <button
            className={`nav-link ${activeTab === 'form' ? 'active' : ''}`}
            onClick={() => { setActiveTab('form'); setSelectedTask(null); }}
          >
            Task Form
          </button>
        </li>
        <li className="nav-item">
          <button
            className={`nav-link ${activeTab === 'list' ? 'active' : ''}`}
            onClick={() => { setActiveTab('list'); setSelectedTask(null); }}
          >
            Task List
          </button>
        </li>
      </ul>

      {activeTab === 'form' && (
        <TaskForm saveTask={saveTask} selectedTask={selectedTask} cancelEdit={cancelEdit} />
      )}

      {activeTab === 'list' && (
        <TaskList onEdit={handleEdit} reload={reloadList} />
      )}
    </div>
  );
}
