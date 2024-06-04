import React from 'react'
import styled from "styled-components";

const Container = styled.div`
  background-color: #44564c;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
`;

export const Roomspage = () => {
  return (
    <Container>
      <h1>Hello, Roomspage test!</h1>
    </Container>
  )
}
