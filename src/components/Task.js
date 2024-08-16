import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenToSquare, faTrash, faCalendar } from '@fortawesome/free-solid-svg-icons';

const Task = ({ task, updateTask, deleteTask }) => {
  const [taskDetails, setTaskDetails] = useState({
    title: task?.title || '',
    Description: task?.Description || '',
    DueDate: task?.DueDate || '',
  });

  const handleAddToCalendar = () => {
    const eventDetails = {
      title: taskDetails.title,
      description: taskDetails.Description,
      startDate: taskDetails.DueDate.replace(/-/g, ''),
      endDate: taskDetails.DueDate.replace(/-/g, ''),
    };

    const calendarUrl = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(eventDetails.title)}&dates=${eventDetails.startDate}/${eventDetails.endDate}&details=${encodeURIComponent(eventDetails.description)}`;

    window.open(calendarUrl, "_blank");
  };

  if (!task) {
    return null;
  }

  return (
    <div className="Task">
      <div className="task-content">
        <p className="task-title"><strong>Title:</strong> {taskDetails.title}</p>
        <p className="task-description"><strong>Description:</strong> {taskDetails.Description}</p>
        <p className="task-due-date"><strong>Due Date:</strong> {taskDetails.DueDate}</p>
      </div>
      <div className="task-actions">
        <FontAwesomeIcon
          className="edit-icon"
          icon={faPenToSquare}
          onClick={() => {
            console.log("Edit Clicked:", task.id);
            updateTask(task.id);
          }}
        />
        <FontAwesomeIcon
          className="delete-icon"
          icon={faTrash}
          onClick={() => {
            console.log("Delete Clicked:", task.id);
            deleteTask(task.id);
          }}
        />
       <FontAwesomeIcon
          className="calendar-icon"
          icon={faCalendar}
          onClick={handleAddToCalendar}
        />
      </div>
    </div>
  );
};

export default Task;
