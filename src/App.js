import React, { useEffect, useState } from "react";
import "./App.css";

function App() {
  let [horizonatalSteps, setHorizontalSteps] = useState(0);
  let [verticalSteps, setVerticalSteps] = useState(0);
  let [upDisabled, setUpDisabled] = useState(true);
  let [downDisabled, setDownDisabled] = useState(false);
  let [leftDisabled, setLeftDisabled] = useState(true);
  let [rightDisabled, setRightDisabled] = useState(false);

  useEffect(() => {
    console.log(horizonatalSteps, verticalSteps);
    if (horizonatalSteps === 0) {
      setLeftDisabled(true);
    } else {
      setLeftDisabled(false);
    }
    if (verticalSteps === 0) {
      setUpDisabled(true);
    } else {
      setUpDisabled(false);
    }
    if (horizonatalSteps === 9) {
      setRightDisabled(true);
    } else {
      setRightDisabled(false);
    }
    if (verticalSteps === 9) {
      setDownDisabled(true);
    } else {
      setDownDisabled(false);
    }
  }, [horizonatalSteps, verticalSteps]);

  function moveUp() {
    setVerticalSteps(verticalSteps - 1);
  }
  function moveDown() {
    setVerticalSteps(verticalSteps + 1);
  }

  function moveRight() {
    setHorizontalSteps(horizonatalSteps + 1);
  }
  function moveLeft() {
    setHorizontalSteps(horizonatalSteps - 1);
  }
  return (
    <div className="game-container">
      <button
        type="button"
        className="row up"
        onClick={moveUp}
        disabled={upDisabled}
      >
        Up
      </button>
      <button
        type="button"
        className="column left"
        onClick={moveLeft}
        disabled={leftDisabled}
      >
        Left
      </button>
      <button
        type="button"
        className="column right"
        onClick={moveRight}
        disabled={rightDisabled}
      >
        Right
      </button>
      <button
        type="button"
        className="row down"
        onClick={moveDown}
        disabled={downDisabled}
      >
        Down
      </button>
      <div className="playground">
        <div
          className="block"
          style={{
            top: 50 * verticalSteps + "px",
            left: 50 * horizonatalSteps + "px",
          }}
        ></div>
      </div>
    </div>
  );
}

export default App;
