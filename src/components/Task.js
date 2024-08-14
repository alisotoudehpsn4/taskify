/**
 * Imports React and necessary state management hooks.
 */
import React, { useState } from 'react';

/**
 * Imports FontAwesome icons for edit and delete actions.
 */
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

/**
 * Defines the Task component.
 * @param {Object} task - The task object containing title, description, due date, and id.
 * @param {Function} updateTask - Function to update the task when edit icon is clicked.
 * @param {Function} deleteTask - Function to delete the task when delete icon is clicked.
 */
const Task = ({ task, updateTask, deleteTask }) => {

  /**
   * Renders nothing if the task is null or undefined.
   */
  if (!task) {
    return null;
  }

  /**
   * Renders the task details with edit and delete actions.
   */
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
          onClick={() => {
            console.log("Edit Clicked:", task.id);
            updateTask(task.id);
          }}
        />
        <FontAwesomeIcon
          className="delete-icon"
          icon={faTrash}
          onClick={() => {
            console.log("Delete Clicked:", task.id);
            deleteTask(task.id);
          }}
        />
      </div>
    </div>
  );
};

/**
 * Exports the Task component as the default export.
 */
export default Task;
