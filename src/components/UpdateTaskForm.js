/**
 * Imports React and necessary hooks for managing state.
 */
import React, { useState } from 'react';

/**
 * Defines the UpdateTaskForm component.
 * @param {Object} props - The properties passed to the component.
 * @param {Function} props.updateTask - Function to update the task.
 * @param {Object} props.task - The task object to be updated.
 */
const UpdateTaskForm = ({ updateTask, task }) => {
  /**
   * useState hook to manage the updated task state.
   */
  const [updatedTask, setUpdatedTask] = useState({
    title: task.title || '',
    Description: task.Description || '',
    DueDate: task.DueDate || ''
  });

  /**
   * Handles input changes and updates the task state.
   * @param {Object} e - The event object.
   */
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUpdatedTask({
      ...updatedTask,
      [name]: value
    });
  };

  /**
   * Handles form submission and updates the task.
   * @param {Object} e - The event object.
   */
  const handleSubmit = (e) => {
    e.preventDefault();
    updateTask({ ...updatedTask, id: task.id });
  };

  /**
   * Renders the task update form.
   */
  return (
    <form className='TaskForm' onSubmit={handleSubmit}>
      <input
        type="text"
        name="title"
        className='task-input'
        placeholder='Update title'
        value={updatedTask.title}
        onChange={handleInputChange}
      />
      <textarea
        type="text"
        name="Description"
        className='task-input'
        placeholder='Update description'
        value={updatedTask.Description}
        onChange={handleInputChange}
      />
      <input
        type="date"
        name="DueDate"
        className='task-input'
        value={updatedTask.DueDate}
        onChange={handleInputChange}
      />
      <button type='submit' className='task-btn'>
        Update
      </button>
    </form>
  );
};

/**
 * Exports the UpdateTaskForm component as the default export.
 */
export default UpdateTaskForm;
