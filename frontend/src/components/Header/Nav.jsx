import { useState } from "react";
import { Link, useNavigate } from "react-router-dom"; 
import styled from "styled-components";
import { FaAngleDown } from "react-icons/fa";
import logo from "../../assets/logo.png";

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
    background-color: #f0f2f0;
    border-radius: 20px;
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

const Button = styled.button`
  padding: 10px 20px;
  background-color: #48544c;
  color: white;
  border: none;
  border-radius: 20px;
  cursor: pointer;

  @media (max-width: 768px) {
    padding: 10px 15px;
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

  const handleRoomClick = () => {
    navigate("/hotelrooms");
  };

  return (
    <NavContainer>
      <NavLeft>
        <NavList $show={showNavList}>
          <NavItem>
            <NavLink to="/conference">Conference & Event</NavLink>
          </NavItem>
          <NavItem>
            <NavLink to="/hotelrooms">Rooms</NavLink>
          </NavItem>
          <NavItem>
            <NavLink to="/About">About</NavLink>
          </NavItem>
        </NavList>
        <DropdownIcon onClick={toggleNavList} $flipped={isIconFlipped ? 1 : 0} />{" "}
      </NavLeft>
      <Logo>
        <Link to="/">
          <img src={logo} alt="Logo" />
        </Link>
      </Logo>
      <NavRight>
        <Button onClick={handleRoomClick}>Book</Button>
        <Button onClick={handleLoginClick}>Log In</Button>
      </NavRight>
    </NavContainer>
  );
};
