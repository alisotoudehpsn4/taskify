import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

const Task = ({ task, updateTask, deleteTask }) => {
  if (!task) {
    return null;
  }

  return (
    <div className="Task">
      <div className="task-content">
        <p className="task-title"><strong>Title:</strong> {task.title}</p>
        <p className="task-description"><strong>Description:</strong> {task.Description}</p>
        <p className="task-due-date"><strong>Due Date:</strong> {task.DueDate}</p>
      </div>
      <div className="task-actions">
        <FontAwesomeIcon
          className="edit-icon"
          icon={faPenToSquare}
          onClick={() => updateTask(task.id)}
        />
        <FontAwesomeIcon
          className="delete-icon"
          icon={faTrash}
          onClick={() => deleteTask(task.id)}
        />
      </div>
    </div>
  );
};

export default Task;
