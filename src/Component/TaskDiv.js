import React from "react";
import { useState, useEffect } from "react";
import NewTask from "./NewTask";
import ShowHideButton from "./ShowHideButton";
import TaskTables from "./TaskTables";
import Button from "react-bootstrap/Button";
import InfoPopUp from "./InfoPopUp";

export default function TaskDiv() {
  const [tasks, setTasks] = useState([]);
  const [showHide, setShowHide] = useState(false);

  useEffect(() => {
    const storedTasks = localStorage.getItem("tasks")
      ? JSON.parse(localStorage.getItem("tasks"))
      : [];
    setTasks(storedTasks);
  }, []); // empty array as the second parameter ensures that useEffect only runs once

  // created a 'addTask' function that adds a new task to the list of existing tasks
  const addTask = (newTask) => {
    const updatedTasks = [...tasks, newTask];
    setTasks(updatedTasks);
    localStorage.setItem("tasks", JSON.stringify(updatedTasks));
    console.log("after adding new task:" + localStorage.getItem("tasks"));
  };

  const handleShowHide = () => {
    showHide === true ? setShowHide(false) : setShowHide(true);
  };

  const handleCheckboxChange = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const clearTask = () => {
    setTasks([]);
    localStorage.clear();
    console.log("after clearing task:" + localStorage.getItem("tasks"));
  };

  return (
    <div className="p-1">
      <div className="p-1 task-Button-container">
        <InfoPopUp />
        <Button className="btn btn-warning" onClick={clearTask}>
          Clear All Tasks
        </Button>
        <ShowHideButton showHide={showHide} handleShowHide={handleShowHide} />
      </div>
      <div className="p-1">
        {tasks.length > 0 && (
          <TaskTables
            tasks={tasks}
            showHide={showHide}
            handleCheckboxChange={handleCheckboxChange}
          />
        )}
      </div>
      <div className="p-1">
        <NewTask addTask={addTask} />
      </div>
    </div>
  );
}
