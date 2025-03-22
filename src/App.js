// App.jsx
import React, { useState } from "react";
import "./index.css";
import Sidebar from "./components/Sidebar";
import Dashboard from "./components/Dashboard";
import Header from "./components/Header";

const App = () => {
  const [tasks, setTasks] = useState({
    todo: [],
    inProgress: [],
    completed: [],
  });

  const [activeView, setActiveView] = useState("list");
  const [categoryFilter, setCategoryFilter] = useState("");
  const [dueDateFilter, setDueDateFilter] = useState("");

  const addTask = (title, dueDate, category = "Work") => {
    if (!title) return;
    const newTask = {
      id: Date.now(),
      title,
      dueDate,
      category,
      status: "todo",
    };
    setTasks((prev) => ({
      ...prev,
      todo: [...prev.todo, newTask],
    }));
  };

  const moveTask = (taskId, from, to) => {
    const taskToMove = tasks[from].find((t) => t.id === taskId);
    if (!taskToMove) return;
    setTasks((prev) => ({
      ...prev,
      [from]: prev[from].filter((t) => t.id !== taskId),
      [to]: [...prev[to], { ...taskToMove, status: to }],
    }));
  };

  // Filter tasks based on category and dueDate
  const filterTasks = (taskList) =>
    taskList.filter((task) => {
      const categoryMatch = categoryFilter
        ? task.category === categoryFilter
        : true;
      const dueDateMatch = dueDateFilter
        ? task.dueDate === dueDateFilter
        : true;
      return categoryMatch && dueDateMatch;
    });

  const filteredTasks = {
    todo: filterTasks(tasks.todo),
    inProgress: filterTasks(tasks.inProgress),
    completed: filterTasks(tasks.completed),
  };

  return (
    <div className="container flex">
      <Sidebar />
      <div className="main-content w-full">
        <Header
          activeView={activeView}
          onViewChange={setActiveView}
          onCategoryChange={setCategoryFilter}
          onDueDateChange={setDueDateFilter}
        />
        <Dashboard
          tasks={filteredTasks}
          addTask={addTask}
          moveTask={moveTask}
          currentView={activeView}
        />
      </div>
    </div>
  );
};

export default App;
