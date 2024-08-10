import React, { useState } from 'react';
import TaskForm from './TaskForm';
import Task from './Task';
import UpdateTaskForm from './UpdateTaskForm';
import { v4 as uuidv4 } from 'uuid';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; 
import { faClipboardList } from '@fortawesome/free-solid-svg-icons'; 

const TaskWrapper = () => {
  const [tasks, setTasks] = useState([]);

  const addTask = (task) => {
    const newTask = { id: uuidv4(), ...task, completed: false, isEditing: false };
    setTasks([...tasks, newTask]);
    console.log("Task Added:", newTask);
  };

  const deleteTask = id => {
    console.log("Delete Task ID:", id);
    setTasks(tasks.filter(task => task.id !== id));
  };

  const toggleEditTask = id => {
    console.log("Toggle Edit Task ID:", id);
    setTasks(tasks.map(task =>
      task.id === id ? { ...task, isEditing: !task.isEditing } : task
    ));
  };

  const updateTask = updatedTask => {
    console.log("Update Task:", updatedTask);
    setTasks(tasks.map(task =>
      task.id === updatedTask.id ? { ...updatedTask, isEditing: false } : task
    ));
  };

  return (
    <div className='TaskWrapper'>
      <h1>TASKIFY <FontAwesomeIcon icon={faClipboardList}/></h1>
      <TaskForm addTask={addTask} />
      {tasks.map((task) => (
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
    </div>
  );
};

export default TaskWrapper;
