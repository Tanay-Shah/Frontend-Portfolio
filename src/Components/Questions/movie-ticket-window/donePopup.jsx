import React, { useEffect, useState } from "react";
import "./donePopup.css";

function DonePopup({ onClose }) {
  const [progress, setProgress] = useState(0);
  const [done, setDone] = useState(false);

  useEffect(() => {
    let interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setDone(true);
          return 100;
        }
        return prev + 1;
      });
    }, 1);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="donePopup-overlay">
      <div className="donePopup-content">
        <div className="progress-bar">
          <div className="progress-bar-fill" style={{ width: `${progress}%` }}>
            {progress}%
          </div>
        </div>
        {done && (
          <h2 className="donePopup-hurray">Hurray! Your seats are booked 🎉</h2>
        )}
        <button className="donePopup-close" onClick={onClose}>
          Close
        </button>
      </div>
    </div>
  );
}

export default DonePopup;
