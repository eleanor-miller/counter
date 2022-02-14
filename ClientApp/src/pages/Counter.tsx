import React from "react";
import { useState } from "react";

import Button from "../components/Button";

function Counter() {
  const [rowCount, setRowCount] = useState(0);
  const [stitchCount, setStitchCount] = useState(0);

  let rowIncrementCount = () => {
    setRowCount(rowCount + 1);
  };

  let rowDecrementCount = () => {
    setRowCount((rowCount) => Math.max(rowCount - 1, 0));
  };

  let stitchIncrementCount = () => {
    setStitchCount(stitchCount + 1);
  };

  let stitchDecrementCount = () => {
    setStitchCount((stitchCount) => Math.max(stitchCount - 1, 0));
  };

  return (
    <div className="counter">
      <div>
        <div className="count">
          <h1>Row Count:</h1>
          <h1>{rowCount}</h1>
        </div>
        <div className="buttons">
          <Button title={"-"} action={rowDecrementCount} />
          <Button title={"+"} action={rowIncrementCount} />
        </div>
      </div>
      <div>
        <div className="count">
          <h1>Stitch Count:</h1>
          <h1>{stitchCount}</h1>
        </div>
        <div className="buttons">
          <Button title={"-"} action={stitchDecrementCount} />
          <Button title={"+"} action={stitchIncrementCount} />
        </div>
      </div>
    </div>
  );
}

export default Counter;
