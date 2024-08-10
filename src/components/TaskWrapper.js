import React, { useState } from 'react';
import TaskForm from './TaskForm';
import Task from './Task';
import { v4 as uuidv4 } from 'uuid';

const TaskWrapper = () => {
  const [tasks, setTasks] = useState([]);

  const addTask = (task) => {
    const newTask = { id: uuidv4(), task1: task, completed: false, isEditing: false };
    setTasks([...tasks, newTask]);

    console.log("New Task Added:");
    console.log("ID:", newTask.id);
    console.log("Title:", task.title);
    console.log("Description:", task.Description);
    console.log("Due Date:", task.DueDate);
  };

  return (
    <div className='TaskWrapper'>
      <TaskForm addTask={addTask} />
      {tasks.map((task) => (
        <Task
          key={task.id}
          task={task.task1}
          updateTask={(id) => console.log(`Update task with ID: ${id}`)}
          deleteTask={(id) => console.log(`Delete task with ID: ${id}`)}
        />
      ))}
    </div>
  );
};

export default TaskWrapper;
