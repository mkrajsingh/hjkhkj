import React from 'react';
import './Header.css'; // Import the CSS file

const Header = ({ activeView, onViewChange, onCategoryChange, onDueDateChange }) => {
  return (
    <header className="header-container">
      {/* Logo */}
      <div className="header-logo">
        <span className="text-xl">📝</span>
        <h1 className="text-xl font-semibold text-gray-800">TaskBuddy</h1>
      </div>

      {/* View Switcher */}
      <div className="header-view-switcher">
        <button
          onClick={() => onViewChange("list")}
          className={`view-button ${activeView === "list" ? "active" : ""}`}
        >
          <span className="text-lg">📋</span>
          <span>List</span>
        </button>

        <button
          onClick={() => onViewChange("board")}
          className={`view-button ${activeView === "board" ? "active" : ""}`}
        >
          <span className="text-lg">📁</span>
          <span>Board</span>
        </button>
      </div>

      {/* Filters */}
      <div className="header-filters">
        <span className="filter-label">Filter by:</span>
        <select onChange={(e) => onCategoryChange(e.target.value)} className="filter-select">
          <option value="">Category</option>
          <option value="Work">Work</option>
          <option value="Personal">Personal</option>
        </select>
        <select onChange={(e) => onDueDateChange(e.target.value)} className="filter-select">
          <option value="">Due Date</option>
          <option value="Today">Today</option>
          <option value="This Week">This Week</option>
        </select>
      </div>
    </header>
  );
};

export default Header;
