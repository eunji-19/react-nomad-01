import React from "react";
import styled from "styled-components";
import Circle from "./Circle";

const App = () => {
  return (
    <div>
      <Circle bgColor="skyblue" borderColor="black" />
      <Circle bgColor="pink" text="Circle" />
    </div>
  );
};

export default App;
