import React, { useState } from "react";
import styled from "styled-components";

const App = () => {
  const [name, setName] = useState("");
  const onChange = (event: React.FormEvent<HTMLInputElement>) => {
    const {
      currentTarget: { value },
    } = event;
    setName(value);
  };

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log("Hello ", name);
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <input
          value={name}
          onChange={onChange}
          type="text"
          placeholder="username"
        />
        <button>Login</button>
      </form>
    </div>
  );
};

export default App;
