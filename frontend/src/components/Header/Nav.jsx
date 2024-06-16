import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { FaAngleDown } from "react-icons/fa";
import logo from "../../assets/logo.png";
import { HashLink } from "react-router-hash-link";

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

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

const NavLeft = styled.div`
  display: flex;
  align-items: center;
  flex: 1;
  justify-content: center;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

const NavList = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0;
  display: flex;

  a {
    position: relative;
    color: var(--color-darkgreen); /* Text color white */
    text-decoration: none;
    padding: 10px 0;
    font-size: 16px;
    @media (min-width: 1000px) {
      margin-right: auto;
    }

    &::after {
      content: "";
      position: absolute;
      left: 0;
      width: 100%;
      height: 1px;
      bottom: 10px;
      background-color: #d3af97;

      transform: scaleX(0);
      transform-origin: right;
      transition: transform 250ms ease-in;
    }

    &:hover {
      color: #d3af97; /* Change color on hover */
    }

    &:hover::after {
      transform: scaleX(1);
      transform-origin: left;
    }
  }

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    display: ${(props) => (props.$show ? "flex" : "none")};
  }
`;

const NavItem = styled.li`
  padding: 10px;

  @media (max-width: 768px) {
    padding: 10px 0;
  }
`;

const NavLink = styled(Link)`
  text-decoration: none;
  padding: 10px 20px;
  transition: color 0.3s ease;
  color: #000000;

  &:hover {
    border-radius: 20px;
  }
`;

const Button = styled.button`
  padding: 10px 20px;
  background-color: #48544c;
  color: white;
  font-size: 16px;
  border: none;
  border-radius: 20px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #d3af97;
    transform: scale(1.05);
    transition: all ease 0.3s;
  }
  @media (max-width: 768px) {
    padding: 10px 15px;
  }
`;

const Logo = styled.div`
  flex: 0;

  img {
    width: 250px;
    height: auto;
  }
`;

const NavRight = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  flex: 1;
  justify-content: center;
  margin-top: 0;

  @media (max-width: 768px) {
    margin-top: -5px;
    margin-bottom: 5px;
  }
`;

const DropdownIcon = styled(FaAngleDown)`
  display: none;
  cursor: pointer;
  margin-left: 5px;
  transition: transform 0.5s ease;

  @media (max-width: 768px) {
    display: inline-block;
    transform: rotate(${(props) => (props.$flipped ? "180deg" : "0deg")});
  }
`;

export const Nav = () => {
  const [showNavList, setShowNavList] = useState(false);
  const [isIconFlipped, setIsIconFlipped] = useState(false);
  const navigate = useNavigate();

  const toggleNavList = () => {
    setShowNavList(!showNavList);
    setIsIconFlipped(!isIconFlipped);
  };

  const handleLoginClick = () => {
    navigate("/login");
  };

  return (
    <NavContainer>
      <NavLeft>
        <NavList $show={showNavList} aria-label="Primary Navigation">
          <NavItem>
            <NavLink
              to="/conference-event"
              aria-label="Visit Conference and Event page"
            >
              Conference & Event
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink to="/hotelrooms" aria-label="Explore Hotel Rooms">
              Rooms
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink to="/about" aria-label="Learn About Us">
              About
            </NavLink>
          </NavItem>
        </NavList>
        <DropdownIcon
          onClick={toggleNavList}
          $flipped={isIconFlipped ? 1 : 0}
          aria-label="Toggle Navigation List"
        />{" "}
      </NavLeft>
      <Logo>
        <Link to="/" aria-label="Home">
          <img src={logo} alt="Home" />
        </Link>
      </Logo>
      <NavRight>
        <HashLink smooth to="/#booking-section">
          <Button aria-label="Book a Room">Book</Button>
        </HashLink>
        <Button onClick={handleLoginClick} aria-label="Log In">
          Log In
        </Button>
      </NavRight>
    </NavContainer>
  );
};
