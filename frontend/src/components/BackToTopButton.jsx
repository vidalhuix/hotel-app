import React, { useState, useEffect } from "react";
import styled from "styled-components";

export const BackToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.pageYOffset > 100) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <StyledButton type="button" aria-label="scroll to top button" onClick={scrollToTop} isVisible={isVisible}>
      <ArrowUp></ArrowUp>
    </StyledButton>
  );
};

const StyledButton = styled.button`
  position: fixed;
  background-color: #1f2220;
  padding-top: 7px;
  height: 50px;
  width: 50px;
  z-index: 10;
  bottom: 20px;
  left: 20px;
  color: #fff;
  border: none;
  border-radius: 50%;
  cursor: pointer;
  transition: opacity 0.3s ease;
  transition: all 0.2s linear;
  display: flex;
  justify-content: center;
  align-items: center;

  ${(props) => !props.isVisible && "opacity: 0;"}

  &:hover {
    background-color: #d3af97;
    transform: translate3d(0, -10px, 0);
  }
`;

const ArrowUp = styled.div`
  width: 20px;
  height: 20px;
  border-top: 4px solid #fff;
  border-left: 4px solid #fff;
  transform: rotate(45deg);
`;
