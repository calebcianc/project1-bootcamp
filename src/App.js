import React from "react";
import "./App.css";
import Timer from "./Component/Timer";
import TaskDiv from "./Component/TaskDiv";

function App() {
  return (
    <div className="App-main">
      <div className="timer">
        <Timer />
      </div>
      <div className="taskDiv">
        <TaskDiv />
      </div>
      <div className="footer">
        This page was built by{" "}
        <a
          href="https://github.com/calebcianc"
          target="_blank"
          rel="noopener noreferrer"
        >
          Caleb Castro
        </a>{" "}
        and{" "}
        <a
          href="https://github.com/Khloeli"
          target="_blank"
          rel="noopener noreferrer"
        >
          Chloe Li
        </a>
      </div>
    </div>
  );
}

export default App;
