import React from "react";

const Sidebar = () => {
  return (
    <div className="left-panel">
      <div className="branding">
        <img
          src="https://img.icons8.com/ios-filled/50/8A2BE2/task.png"
          alt="Task Icon"
          className="logo-icon"
        />
        <h1>TaskBuddy</h1>
        <p>
          Streamline your workflow and track progress effortlessly with our
          all-in-one task management app.
        </p>
        <button className="google-button">
          <img
            src="https://img.icons8.com/color/24/000000/google-logo.png"
            alt="Google Icon"
          />
          Continue with Google
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
