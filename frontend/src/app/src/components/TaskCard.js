export default function TaskCard({ task, onDelete, onEdit }) {
    return (
      <div className="col-md-4">
        <div className="card mb-3">
          <div className="card-body">
            <h5 className="card-title">{task.title}</h5>
            <p className="card-text">{task.description}</p>
            <p className="card-text">
              <small className="text-muted">Completed: {task.completed ? 'Yes' : 'No'}</small>
            </p>
            <button className="btn btn-primary me-2" onClick={() => onEdit(task)}>Edit</button>
            <button className="btn btn-danger" onClick={() => onDelete(task.taskId)}>Delete</button>
          </div>
        </div>
      </div>
    );
  }
  