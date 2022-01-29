import React from "react";
import styled from "styled-components";

interface ContainerProps {
  bgColor: string;
}

const Container = styled.div<ContainerProps>`
  background-color: ${(props) => props.bgColor};
  width: 200px;
  height: 200px;
  border-radius: 100px;
`;

interface CircleProps {
  bgColor: string;
}

function Circle({ bgColor }: CircleProps) {
  return <Container bgColor={bgColor} />;
}

export default Circle;

interface Player {
  name: string;
  age: number;
}

const sayHello = (playerObj: Player) =>
  `Hello ${playerObj.name} you are ${playerObj.age} old`;

sayHello({ name: "eunji", age: 20 });
