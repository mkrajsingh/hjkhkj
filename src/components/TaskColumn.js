// components/TaskColumn.jsx
import React from "react";
import TaskItem from "./TaskItem";
import "./Dashboard.css";

const TaskColumn = ({ title, tasks, from, moveTask }) => {
  return (
    <div className={`task-section ${from}`}>
      <div className="section-header">
        {title} ({tasks.length})
      </div>
      <ul className="tasks">
        {tasks.map((task) => (
          <TaskItem
            key={task.id}
            task={task}
            from={from}
            moveTask={moveTask}
          />
        ))}
      </ul>
    </div>
  );
};

export default TaskColumn;
