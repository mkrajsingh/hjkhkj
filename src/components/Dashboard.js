// src/components/Dashboard.jsx
import React, { useState } from "react";
import TaskColumn from "./TaskColumn";
import "./Dashboard.css";

const Dashboard = () => {
  const [tasks, setTasks] = useState({
    todo: [],
    inProgress: [],
    completed: [],
  });

  const [newTaskTitle, setNewTaskTitle] = useState("");
  const [dueDate, setDueDate] = useState("");
  const [category, setCategory] = useState("Work");

  const addTask = () => {
    if (!newTaskTitle.trim() || !dueDate) return;

    const newTask = {
      id: Date.now(),
      title: newTaskTitle,
      dueDate,
      category,
    };

    setTasks((prev) => ({
      ...prev,
      todo: [...prev.todo, newTask],
    }));

    clearForm();
  };

  const clearForm = () => {
    setNewTaskTitle("");
    setDueDate("");
    setCategory("Work");
  };

  const moveTask = (id, from, to) => {
    const taskToMove = tasks[from].find((t) => t.id === id);
    if (!taskToMove) return;

    setTasks((prev) => ({
      ...prev,
      [from]: prev[from].filter((t) => t.id !== id),
      [to]: [...prev[to], taskToMove],
    }));
  };

  return (
    <div className="dashboard">
      <h1>Task Dashboard</h1>

      <div className="add-task">
        <input
          type="text"
          placeholder="Enter new task"
          value={newTaskTitle}
          onChange={(e) => setNewTaskTitle(e.target.value)}
        />
        <input
          type="date"
          value={dueDate}
          onChange={(e) => setDueDate(e.target.value)}
        />
        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          <option value="Work">Work</option>
          <option value="Home">Home</option>
          <option value="Personal">Personal</option>
        </select>
        <button type="button" onClick={addTask}>Add Task</button>
        <button type="button" onClick={clearForm}>Cancel</button>
      </div>

      <div className="columns">
        <TaskColumn
          title="Todo"
          tasks={tasks.todo}
          moveTask={moveTask}
          from="todo"
        />
        <TaskColumn
          title="In Progress"
          tasks={tasks.inProgress}
          moveTask={moveTask}
          from="inProgress"
        />
        <TaskColumn
          title="Completed"
          tasks={tasks.completed}
          moveTask={moveTask}
          from="completed"
        />
      </div>
    </div>
  );
};

export default Dashboard;
