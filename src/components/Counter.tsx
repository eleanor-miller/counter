import React from "react";
import { useState } from "react";

import Button from "./Button";

function Counter() {
  const [count, setCount] = useState(0);

  let rowIncrementCount = () => {
    setCount(count + 1);
  };

  let rowDecrementCount = () => {
    setCount(count - 1);
  };

  let stitchIncrementCount = () => {
    setCount(count + 1);
  };

  let stitchDecrementCount = () => {
    setCount(count - 1);
  };

  return (
    <div className="counter">
      <div>
        <div className="count">
          <h3>Row Count:</h3>
          <h1>{count}</h1>
        </div>
        <div className="buttons">
          <Button title={"-"} action={rowDecrementCount} />
          <Button title={"+"} action={rowIncrementCount} />
        </div>
      </div>
      <div>
        <div className="count">
          <h3>Stitch Count:</h3>
          <h1>{count}</h1>
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
