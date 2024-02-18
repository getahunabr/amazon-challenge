import React from "react";
import { useColor } from "./ContextProvider";
const { colorToggler } = useColor;
const ComponentA = () => {
  return (
    <div>
      <button onClick={colorToggler}>colorToggler</button>
    </div>
  );
};

export default ComponentA;
