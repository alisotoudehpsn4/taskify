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
  const [tasks, setTasks] = useState([
    {
      id: 1,
      title: 'Finish React Project',
      Description: 'Complete the final module for the React project.',
      DueDate: '2024-08-18',
      isEditing: false,
    },
    {
      id: 2,
      title: 'Buy Groceries',
      Description: 'Purchase milk, eggs, and bread from the grocery store.',
      DueDate: '2024-08-19',
      isEditing: false,
    },
    {
      id: 3,
      title: 'Gym Session',
      Description: 'Attend the evening workout session at the gym.',
      DueDate: '2024-08-20',
      isEditing: false,
    },
    {
      id: 4,
      title: 'Read Book',
      Description: 'Finish reading the last two chapters of the book.',
      DueDate: '2024-08-21',
      isEditing: false,
    },
    {
      id: 5,
      title: 'Doctor Appointment',
      Description: 'Visit the doctor for the annual check-up.',
      DueDate: '2024-08-22',
      isEditing: false,
    },
    {
      id: 6,
      title: 'Team Meeting',
      Description: 'Participate in the project planning meeting.',
      DueDate: '2024-08-23',
      isEditing: false,
    },
    {
      id: 7,
      title: 'Submit Assignment',
      Description: 'Submit the final assignment for the course.',
      DueDate: '2024-08-24',
      isEditing: false,
    },
    {
      id: 8,
      title: 'Plan Vacation',
      Description: 'Plan the details for the upcoming vacation.',
      DueDate: '2024-08-25',
      isEditing: false,
    },
    {
      id: 9,
      title: 'Renew Car Insurance',
      Description: 'Renew the car insurance before it expires.',
      DueDate: '2024-08-26',
      isEditing: false,
    },
  ]);
  
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
          placeholder="Search for title or description"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          hidden = {tasks.length === 0}
          className='search'
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
