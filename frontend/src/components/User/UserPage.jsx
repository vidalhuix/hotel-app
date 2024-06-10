import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import exit from "../../assets/exit.png";
import enter from "../../assets/enter.png";
import guest from "../../assets/guest.png";

const Container = styled.div`
  background-color: #44564c;
  height: 110vh;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
`;

const Content = styled.div`
  text-align: center;
`;

const Heading = styled.h2`
  font-size: 2rem;
  margin-bottom: 1rem;
`;

const UserInfoContainer = styled.div`
  background-color: white;
  padding: 25px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
  margin-bottom: 2rem;
`;

const UserDetails = styled.div`
  font-size: 1rem;
  margin-bottom: ${(props) => (props.$guests ? "1.5rem" : "0.3rem")};
  color: black;
  text-align: left;
  padding-left: 20px;
`;

const SignUpLink = styled(Link)`
  font-weight: normal;
  color: black;
  text-decoration: none;
  margin-left: 5px;
  position: relative;

  &::after {
    content: "";
    position: absolute;
    left: 0;
    width: 0;
    height: 2px;
    bottom: -3px;
    background-color: #d3af97;
    transition: width 250ms ease-in;
  }

  &:hover {
    color: #d3af97;
  }

  &:hover::after {
    width: 100%;
  }
`;

const SectionDivider = styled.div`
  width: 100%;
  height: 1px;
  background-color: #ccc;
  margin-top: 15px;
  margin-bottom: 15px;
`;

const Button = styled.button`
  padding: 10px 30px;
  border-radius: 20px;
  border: none;
  background-color: #d3af97;
  color: white;
  cursor: pointer;
  font-size: 1rem;
  margin-right: ${(props) => (props.$delete ? "1rem" : "0")};

  &:hover {
    color: #5a675f;
    background-color: #fff;
    transform: scale(1.05);
    transition: all ease 0.3s;
  }
`;

const ErrorMessage = styled.div`
  color: red;
  margin-top: -1.5rem;
  margin-bottom: 0.5rem;
`;

const SuccessMessage = styled.div`
  color: green;
`;

export const UserPage = () => {
  const [user, setUser] = useState(null);
  const [accessToken, setAccessToken] = useState("");
  const [deleteMessage, setDeleteMessage] = useState("");
  const [deleteError, setDeleteError] = useState("");

  useEffect(() => {
    const storedAccessToken = localStorage.getItem("accessToken");
    if (storedAccessToken) {
      setAccessToken(storedAccessToken);
      fetchUserDetails(storedAccessToken);
    }
  }, []);

  const fetchUserDetails = async (token) => {
    try {
      if (!token) {
        console.error("Access token is missing");
        return;
      }

      const response = await fetch(
        "https://sunside-hotel.onrender.com/user-details",
        {
          headers: {
            Authorization: token,
          },
        }
      );

      if (response.ok) {
        const data = await response.json();
        setUser(data.user);
      } else {
        console.error("Error fetching user details");
      }
    } catch (error) {
      console.error("Error fetching user details:", error);
    }
  };

  const handleDeleteAccount = async () => {
    try {
      if (!user || !user.id) {
        console.error("User data is missing or invalid");
        return;
      }

      const response = await fetch(
        `https://sunside-hotel.onrender.com/users/${user.id}`,
        {
          method: "DELETE",
          headers: {
            Authorization: accessToken,
          },
        }
      );

      if (response.ok) {
        const data = await response.json();
        setDeleteMessage(data.message);
        setDeleteError("");
        setTimeout(() => {
          localStorage.removeItem("accessToken");
          setAccessToken("");
          window.location.href = "/login";
        }, 2000);
      } else {
        const data = await response.json();
        setDeleteError(data.error);
        setDeleteMessage("");
      }
    } catch (error) {
      console.error("Error deleting account:", error);
      setDeleteError("Error deleting account. Please try again later.");
      setDeleteMessage("");
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("accessToken");
    setAccessToken("");
  };

  return (
    <Container>
      <Content>
        <Heading>BOOKING INFORMATION</Heading>
        <UserInfoContainer>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              marginBottom: "10px",
            }}
          >
            <UserDetails
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                marginRight: "15px",
              }}
            >
              <img
                src={enter}
                alt="Check-in"
                style={{ marginBottom: "5px", width: "30px", height: "30px" }}
              />
              <b>Check-in:</b>
              <div>Sun 23 Jun</div>
            </UserDetails>
            <UserDetails
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                marginRight: "15px",
              }}
            >
              <img
                src={exit}
                alt="Check-out"
                style={{ marginBottom: "5px", width: "30px", height: "30px" }}
              />
              <b>Check-out:</b>
              <div>Mon 24 Jun</div>
            </UserDetails>
            <UserDetails
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <img
                src={guest}
                alt="Guests"
                style={{ marginBottom: "5px", width: "30px", height: "30px" }}
              />
              <b>Guests:</b>
              <div>2</div>
            </UserDetails>
          </div>
          <div style={{ textAlign: "center", marginTop: "10px" }}>
            <SignUpLink to="/cancel-booking">
              Click here to cancel your booking
            </SignUpLink>
          </div>
          <SectionDivider />
          <UserDetails>
            <b>Name:</b> John Doe
          </UserDetails>
          <UserDetails>
            <b>Email:</b> johndoe@example.com
          </UserDetails>
          {/* <UserDetails>No active booking found.</UserDetails> */}
        </UserInfoContainer>
        {deleteError && <ErrorMessage>{deleteError}</ErrorMessage>}
        <Button $delete onClick={handleDeleteAccount}>
          Delete Account
        </Button>
        <Link to="/">
          <Button onClick={handleLogout}>Logout</Button>
        </Link>
        {deleteMessage && <SuccessMessage>{deleteMessage}</SuccessMessage>}
      </Content>
    </Container>
  );
};
