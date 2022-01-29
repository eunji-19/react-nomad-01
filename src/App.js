import React from "react";
import styled from "styled-components";

const Father = styled.div`
  display: flex;
`;

/**
 * as : styled.button -> styled.a
 */
const Btn = styled.button`
  color: white;
  background-color: tomato;
  border: 0;
  border-radius: 15px;
`;

const Input = styled.input.attrs({ required: true })`
  background-color: tomato;
`;

const App = () => {
  return (
    <Father as="header">
      <Input />
      <Input />
      <Input />
      <Input />
      {/* <Btn>Login</Btn>
      <Btn as="a" href="/">
        Login
      </Btn> */}
    </Father>
  );
};

export default App;
