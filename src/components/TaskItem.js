// components/TaskItem.jsx
import React from "react";
import "./Dashboard.css";

const TaskItem = ({ task, from, moveTask }) => {
  const handleMove = () => {
    const nextStatus =
      from === "todo" ? "inProgress" : from === "inProgress" ? "completed" : null;

    if (nextStatus) {
      moveTask(task.id, from, nextStatus);
    }
  };

  return (
    <li className="task-item">
      <span className="check-icon">✅</span>
      <span className="task-title">{task.title}</span>
      <span className="task-date">{task.dueDate || "No Due Date"}</span>
      <span className={`task-status ${from}`}>{from.toUpperCase()}</span>

      {from !== "completed" && (
        <button className="move-button" onClick={handleMove}>
          ➡️
        </button>
      )}
    </li>
  );
};

export default TaskItem;
