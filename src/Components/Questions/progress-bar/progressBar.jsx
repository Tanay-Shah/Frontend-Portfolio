import React, { useEffect, useRef, useState } from "react";
import "./progressBar.css";

function ProgressBar() {
  const [progress, setProgress] = useState(0);
  const intervalRef = useRef(null);

  const onStart = () => {
    if (intervalRef.current !== null) return;
    intervalRef.current = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(intervalRef.current);
          intervalRef.current = null;
          return 100;
        }
        return prev + 1;
      });
    }, 50);
  };

  return (
    <div className="wrapper">
      <h1 style={{ fontSize: "22px" }}>Progress Bar</h1>
      <div className="container">
        <div className="bar" style={{ width: `${progress}%` }}>
          {`${progress}%`}
        </div>
      </div>

      <div className="btn">
        <button className="startBtn" onClick={onStart}>
          Start
        </button>
        <button className="startBtn" onClick={() => setProgress(0)}>
          Reset
        </button>
      </div>
    </div>
  );
}

export default ProgressBar;
