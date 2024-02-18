import React from "react";
import { useColor } from "./ContextProvider";
const ComponentB = () => {
  const { color } = useColor();
  return (
    <div className={color}>
      <h1>Component B</h1>
      <h2>color is {color}</h2>
    </div>
  );
};

export default ComponentB;
