import React, { useState } from 'react';

const UpdateTaskForm = ({ updateTask, task }) => {
  const [updatedTask, setUpdatedTask] = useState({
    title: task.title || '',
    Description: task.Description || '',
    DueDate: task.DueDate || ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUpdatedTask({
      ...updatedTask,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    updateTask({ ...updatedTask, id: task.id });
  };

  return (
    <form className='TaskForm' onSubmit={handleSubmit}>
      <input
        type="text"
        name="title"
        className='task-input'
        placeholder='Update task'
        value={updatedTask.title}
        onChange={handleInputChange}
      />
      <input
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

export default UpdateTaskForm;
