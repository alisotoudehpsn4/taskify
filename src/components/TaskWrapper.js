import React, { useState } from 'react';
import TaskForm from './TaskForm';
import Task from './Task';
import UpdateTaskForm from './UpdateTaskForm';
import { v4 as uuidv4 } from 'uuid';

const TaskWrapper = () => {
  const [tasks, setTasks] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const tasksPerPage = 10;

  const addTask = (task) => {
    const newTask = { id: uuidv4(), ...task, completed: false, isEditing: false };
    setTasks([...tasks, newTask]);
  };

  const deleteTask = id => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  const toggleEditTask = id => {
    setTasks(tasks.map(task =>
      task.id === id ? { ...task, isEditing: !task.isEditing } : task
    ));
  };

  const updateTask = updatedTask => {
    setTasks(tasks.map(task =>
      task.id === updatedTask.id ? { ...updatedTask, isEditing: false } : task
    ));
  };

  // Pagination logic
  const indexOfLastTask = currentPage * tasksPerPage;
  const indexOfFirstTask = indexOfLastTask - tasksPerPage;
  const currentTasks = tasks.slice(indexOfFirstTask, indexOfLastTask);

  const nextPage = () => {
    if (currentPage < Math.ceil(tasks.length / tasksPerPage)) {
      setCurrentPage(currentPage + 1);
    }
  };

  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <div className='TaskWrapper'>
      <h1>Tasks</h1>
      <TaskForm addTask={addTask} />
      {currentTasks.map((task) => (
        task.isEditing ? (
          <UpdateTaskForm
            key={task.id}
            task={task}
            updateTask={updateTask}
          />
        ) : (
          <Task
            key={task.id}
            task={task}
            deleteTask={deleteTask}
            updateTask={toggleEditTask}
          />
        )
      ))}
      <div className="pagination">
        <button onClick={prevPage} disabled={currentPage === 1}>Previous</button>
        <span> Page {currentPage} of {Math.ceil(tasks.length / tasksPerPage)} </span>
        <button onClick={nextPage} disabled={currentPage === Math.ceil(tasks.length / tasksPerPage)}>Next</button>
      </div>
    </div>
  );
};

export default TaskWrapper;
