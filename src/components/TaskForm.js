/**
 * Imports React and necessary hooks for managing state.
 */
import React, { useState } from 'react';

/**
 * Defines the TaskForm component.
 * @param {Function} addTask - Function to add a new task to the task list.
 */
const TaskForm = ({ addTask }) => {
  /**
   * Get today's date in YYYY-MM-DD format.
   */
  const getTodayDate = () => {
    const today = new Date();
    const year = today.getFullYear();
    const month = String(today.getMonth() + 1).padStart(2, '0'); // Months are 0-indexed in JavaScript
    const day = String(today.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
  };

  /**
   * useState hook to manage form input state, with DueDate defaulted to today's date.
   */
  const [task, setTask] = useState({
    title: '',
    Description: '',
    DueDate: getTodayDate() // Set initial DueDate to today's date
  });

  /**
   * Handles input changes and updates the form state.
   * @param {Object} e - The event object.
   */
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setTask({
      ...task,
      [name]: value
    });
  };

  /**
   * Handles form submission and adds the task.
   * @param {Object} e - The event object.
   */
  const handleSubmit = (e) => {
    e.preventDefault();
    
    /**
     * Validates form fields before submission.
     */
    if (!task.title || !task.Description || !task.DueDate) {
      alert('Please fill out all fields.');
      return;
    }
    
    /**
     * Calls addTask to add the new task.
     */
    addTask(task); 
    setTask({ title: '', Description: '', DueDate: getTodayDate() }); // Reset DueDate to today's date
  };

  /**
   * Renders the task input form.
   */
  return (
    <form className='TaskForm' onSubmit={handleSubmit}>
      <input
        type="text"
        name="title"
        className='task-input'
        placeholder='Enter a task'
        value={task.title} 
        onChange={handleInputChange}
      />
      <textarea
        type="text"
        name="Description"
        className='task-input'
        placeholder='Enter a description'
        value={task.Description} 
        onChange={handleInputChange}
      />
      <input
        type="date"
        name="DueDate"
        className='task-input'
        value={task.DueDate} 
        onChange={handleInputChange}
      />
      <button type='submit' className='task-btn'>
        Add
      </button>
    </form>
  );
};

/**
 * Exports the TaskForm component as the default export.
 */
export default TaskForm;
