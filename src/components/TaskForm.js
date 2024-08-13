import React, { useState } from 'react';

const TaskForm = ({ addTask }) => {
  const [task, setTask] = useState({
    title: '',
    Description: '',
    DueDate: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setTask({
      ...task,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!task.title || !task.Description || !task.DueDate) {
      alert('Please fill out all fields.');
      return;
    }
    addTask(task); 
    setTask({ title: '', Description: '', DueDate: '' }); 
  };

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

export default TaskForm;
