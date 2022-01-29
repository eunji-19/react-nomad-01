import React, { useEffect, useState } from "react";
import styled from "styled-components";

interface ContainerProps {
  bgColor: string;
  borderColor: string;
}

const Container = styled.div<ContainerProps>`
  background-color: ${(props) => props.bgColor};
  width: 200px;
  height: 200px;
  border-radius: 100px;
  border: 1px solid ${(props) => props.borderColor};
`;

interface CircleProps {
  bgColor: string;
  borderColor?: string;
  text?: string;
}

function Circle({ bgColor, borderColor, text = "default" }: CircleProps) {
  const [counter, setCounter] = useState<number>(0);

  return (
    <Container bgColor={bgColor} borderColor={borderColor ?? bgColor}>
      {text} {counter}
      <button onClick={() => setCounter((prev) => prev + 1)}>Increment</button>
    </Container>
  );
}

export default Circle;
