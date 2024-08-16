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
   * useState hook to manage form input state.
   */
  const [task, setTask] = useState({
    title: '',
    Description: '',
    DueDate: ''
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
    setTask({ title: '', Description: '', DueDate: '' }); 
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
        placeholder='Select date'
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
