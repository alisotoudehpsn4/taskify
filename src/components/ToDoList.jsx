import React, { useState } from "react";

function ToDoList() {
  const [tasks, setTasks] = useState([
    { title: "Eat", description: "Have breakfast", dueDate: "2024-08-11" },
    { title: "Dance", description: "Practice dance", dueDate: "2024-08-13" },
  ]);

  const [newTask, setNewTask] = useState({
    title: "",
    description: "",
    dueDate: "",
  });

  function handleInputChange(event) {
    const { name, value } = event.target;
    const updatedTask = { ...newTask, [name]: value };
    setNewTask(updatedTask);
  }

  function addTask() {
    if (
      newTask.title.trim() !== "" &&
      newTask.description.trim() !== "" &&
      newTask.dueDate.trim() !== ""
    ) {
      setTasks([...tasks, newTask]);
      setNewTask({ title: "", description: "", dueDate: "" });
    }
  }

  function deleteTask(index) {

    const updatedTasks = tasks.filter((_,i) => i !== index);
    setTasks(updatedTasks);
    
  }

  function updateTask(index) {
   
  }

  return (
    <div className="to-do-list">
      <h1>To Do</h1>

      <div>
        <label>Task:</label>
        <input
          type="text"
          name="title"
          placeholder="Enter a task..."
          value={newTask.title}
          onChange={handleInputChange}
        />
        <br />
        <br />

        <label>Description:</label>
        <input
          type="text"
          name="description"
          placeholder="Enter a description..."
          value={newTask.description}
          onChange={handleInputChange}
        />
        <br />
        <br />

        <label>Due Date:</label>
        <input
          type="date"
          name="dueDate"
          value={newTask.dueDate}
          onChange={handleInputChange}
        />
        <br />
        <br />

        <button className="add-button" onClick={addTask}>
          Add
        </button>
      </div>

      <ol>
        {tasks.map((task, index) => (
          <li key={index}>
            <span className="text">
              <strong>Title:</strong> {task.title} <br />
              <strong>Description:</strong> {task.description} <br />
              <strong>Due Date:</strong> {task.dueDate}
            </span>
            <button
              className="delete-button"
              onClick={() => deleteTask(index)}
            >
              Delete
            </button>
            <button
              className="update-button"
              onClick={() => updateTask(index)}
            >
              Update
            </button>
          </li>
        ))}
      </ol>
    </div>
  );
}

export default ToDoList;
