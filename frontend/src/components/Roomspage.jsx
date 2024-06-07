import React from 'react'
import styled from "styled-components";

const Container = styled.div`
  background-color: #44564c;
  height: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  padding-top:120px;
`;

export const Roomspage = () => {

  return (
    <Container>
      <h1>Hello, Roomspage test!</h1>
    </Container>
  )
}