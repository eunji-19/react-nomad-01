import React from "react";
import styled, { keyframes } from "styled-components";

/**
 * Animation
 */
const Wrapper = styled.div`
  display: flex;
  height: 100vh;
  width: 100vw;
  justify-content: center;
  align-items: center;
`;

const rotationAnimation = keyframes`
    0% {
        transform: rotate(0deg);
        border-radius: 0px;
    }
    50% {
        border-radius: 100px;
    }
    100% {
        transform: rotate(360deg);
        border-radius: 0px;
    }
`;

/**
 * Styled-Componets 안의 element 선택하는 방법 1
 * <span></span>
 */
// const Box = styled.div`
//   height: 200px;
//   width: 200px;
//   background-color: tomato;
//   animation: ${rotationAnimation} 1s linear infinite;
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   span {
//     font-size: 36px;
//     &:hover {
//       font-size: 50px;
//     }
//     &:active {
//       opacity: 0;
//     }
//   }
// `;

/**
 * Styled-Componets 안의 element 선택하는 방법 2
 * <Emoji as="p"></Emoji>
 */
const Emoji = styled.span`
  font-size: 36px;
`;
const Box = styled.div`
  height: 200px;
  width: 200px;
  background-color: tomato;
  animation: ${rotationAnimation} 1s linear infinite;
  display: flex;
  justify-content: center;
  align-items: center;
  ${Emoji} {
    &:hover {
      font-size: 100px;
    }
    &:active {
      opacity: 0;
    }
  }
`;

const App = () => {
  return (
    <Wrapper>
      <Box>
        {/* <span>😍</span> */}
        <Emoji>😍</Emoji>
      </Box>
      <Emoji>💪</Emoji>
    </Wrapper>
  );
};

export default App;
