/**
 * Imports React and necessary hooks for managing state.
 */
import React, { useState } from 'react';

/**
 * Imports child components used within TaskWrapper.
 */
import TaskForm from './TaskForm';
import Task from './Task';
import UpdateTaskForm from './UpdateTaskForm';

/**
 * Imports uuid for generating unique task IDs.
 */
import { v4 as uuidv4 } from 'uuid';

/**
 * Defines the TaskWrapper component to manage tasks and their operations.
 */
const TaskWrapper = () => {
  /**
   * useState hooks to manage tasks, current page, and search query states.
   */
  const [tasks, setTasks] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const tasksPerPage = 10;
  const [search, setSearch] = useState('');

  /**
   * Adds a new task to the task list.
   * @param {Object} task - The new task to be added.
   */
  const addTask = (task) => {
    const newTask = { id: uuidv4(), ...task, isEditing: false };
    setTasks([...tasks, newTask]);
  };

  /**
   * Deletes a task from the task list by its ID.
   * @param {String} id - The ID of the task to be deleted.
   */
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  /**
   * Toggles the editing state of a task by its ID.
   * @param {String} id - The ID of the task to be toggled.
   */
  const toggleEditTask = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, isEditing: !task.isEditing } : task
      )
    );
  };

  /**
   * Updates a task with new data.
   * @param {Object} updatedTask - The updated task data.
   */
  const updateTask = (updatedTask) => {
    setTasks(
      tasks.map((task) =>
        task.id === updatedTask.id ? { ...updatedTask, isEditing: false } : task
      )
    );
  };

  /**
   * Filters tasks based on the search query and returns the filtered tasks.
   */
  const filteredTasks = tasks.filter((task) => {
    const title = task.title ? task.title.toLowerCase() : '';
    const description = task.Description ? task.Description.toLowerCase() : '';
    const searchQuery = search.toLowerCase();
  
    console.log('Title:', title);
    console.log('Description:', description);
    console.log('Search Query:', searchQuery);
  
    return title.includes(searchQuery) || description.includes(searchQuery);
  });
  
  /**
   * Pagination logic for displaying tasks by page.
   */
  const indexOfLastTask = currentPage * tasksPerPage;
  const indexOfFirstTask = indexOfLastTask - tasksPerPage;
  const currentTasks = filteredTasks.slice(indexOfFirstTask, indexOfLastTask);

  /**
   * Advances to the next page if there are more tasks.
   */
  const nextPage = () => {
    if (currentPage < Math.ceil(filteredTasks.length / tasksPerPage)) {
      setCurrentPage(currentPage + 1);
    }
  };

  /**
   * Goes back to the previous page if not on the first page.
   */
  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  /**
   * Renders the TaskWrapper component with task management and pagination.
   */
  return (
    <div className="TaskWrapper">
      {console.log('tasks length' + tasks)}
      <br/>
      <form>
        <input
          type="text"
          placeholder="Search tasks..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          hidden = {tasks.length === 0}
        />
      </form>
      <br/>

      <h1>Tasks</h1>
      <TaskForm addTask={addTask} />
      <br />
      {currentTasks.map((task) =>
        task.isEditing ? (
          <UpdateTaskForm key={task.id} task={task} updateTask={updateTask} />
        ) : (
          <Task
            key={task.id}
            task={task}
            deleteTask={deleteTask}
            updateTask={toggleEditTask}
          />
        )
      )}

      {/* Pagination display */}
      <div className="pagination">
        {currentPage > 1 && <button onClick={prevPage}>Previous</button>}

        <span>
          {' '}
          Page {currentPage} of {Math.ceil(filteredTasks.length / tasksPerPage)}{' '}
        </span>

        {currentPage < Math.ceil(filteredTasks.length / tasksPerPage) && (
          <button onClick={nextPage}>Next</button>
        )}
      </div>
    </div>
  );
};

/**
 * Exports the TaskWrapper component as the default export.
 */
export default TaskWrapper;
