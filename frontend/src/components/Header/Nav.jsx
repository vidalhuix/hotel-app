import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import logo from "../../assets/logo.png";
import heroVideo from "../../assets/herovideo.mp4";

// Styling for the navigation container
// 
const NavContainer = styled.nav`
  padding: 5px;
  margin: 0;
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1001;
  background-color: #ffffff;
  color: #000000;
  font-family: "Apercu", sans-serif;
  font-size: 16px;
  display: flex;
`;

// Styling for the left side of the navigation bar
const NavLeft = styled.div`
  display: flex;
  align-items: center;
  flex: 1;
  justify-content: center;
`;

// Styling for the unordered list in the navigation bar
const NavList = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0;
  display: flex;
`;

// Styling for each item in the navigation bar
const NavItem = styled.li`
  padding: 10px;
`;

// Styling for the navigation links
const NavLink = styled(Link)`
  text-decoration: none;
  padding: 10px 20px;
  transition: color 0.3s ease;
  color: #000000;

  &:hover {
    background-color: #f8f4f4;
    border-radius: 20px;
  }
`;

// Styling for the logo in the navigation bar
const Logo = styled.div`
  flex: 0;

  img {
    width: 250px;
    height: auto;
  }
`;

// Styling for the right side of the navigation bar
const NavRight = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  flex: 1;
  justify-content: center;
`;

// Styling for the buttons in the navigation bar
const Button = styled.button`
  padding: 10px 20px;
  background-color: #48544c;
  color: white;
  border: none;
  border-radius: 20px;
  cursor: pointer;
`;

// Styling for the container of the hero video
const HeroVideoContainer = styled.div`
  position: relative;
  top: 85px;
  left: 0;
  width: 100%;
  height: 80vh;
  overflow: hidden;
  margin-left:0;
`;

// Styling for the hero video itself
const HeroVideo = styled.video`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

// Styling for the container of the text overlay
const TextOverlayContainer = styled.div`
  position: relative;
  top: -340px;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 1000;
  text-align: center;
`;

// Styling for the text overlay
const TextOverlay = styled.div`
  color: #ffffff;
  font-size: 72px;
  font-weight: 700;
  font-family: "Apercu", sans-serif;
  line-height: 0.9;
  animation: slideDown 1.5s ease-in-out;
  text-shadow: 2px 3px 5px rgba(0,0,0,0.1);

  @keyframes slideDown {
    0% {
      transform: translateY(-300%);
      opacity: 0;
    }
    100% {
      transform: translateY(0);
      opacity: 1;
    }
  }
`;

export const Nav = () => {
  return (
    <>
      <NavContainer>
        <NavLeft>
          <NavList>
            <NavItem>
              <NavLink to="/conference">Conference & Event</NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="/spa">Spa</NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="/dining">Dining</NavLink>
            </NavItem>
          </NavList>
        </NavLeft>
        <Logo>
          <img src={logo} alt="Logo" />
        </Logo>
        <NavRight>
          <Button>Book</Button>
          <Button>Log In</Button>
        </NavRight>
      </NavContainer>
      <HeroVideoContainer>
        <HeroVideo autoPlay loop muted>
          <source src={heroVideo} type="video/mp4" />
        </HeroVideo>
      </HeroVideoContainer>
      <TextOverlayContainer>
        <TextOverlay>
          WELCOME TO <br></br> THE SUNSIDE HOTEL
        </TextOverlay>
      </TextOverlayContainer>
    </>
  );
};