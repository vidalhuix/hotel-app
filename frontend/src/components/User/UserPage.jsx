import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "./AuthContext";
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
  margin-bottom: 10px;
`;

export const UserPage = () => {
  const navigate = useNavigate();
  const { accessToken, logout } = useAuth();
  const [userDetails, setUserDetails] = useState(null);
  const [error, setError] = useState("");

  useEffect(() => {
    if (accessToken) {
      fetchUserDetails();
    } else {
      navigate("/login");
    }
  }, [accessToken, navigate]);

  const fetchUserDetails = async () => {
    try {
      const response = await fetch(
        "https://sunside-hotel.onrender.com/user-details",
        {
          headers: {
            Authorization: accessToken,
          },
        }
      );

      if (response.ok) {
        const data = await response.json();
        setUserDetails(data.user);
      } else {
        setError("Failed to fetch user details");
      }
    } catch (error) {
      console.error("Error fetching user details:", error);
      setError("Failed to fetch user details");
    }
  };

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  const handleDeleteAccount = async () => {
    try {
      const response = await fetch(
        `https://sunside-hotel.onrender.com/users/${userDetails._id}`,
        {
          method: "DELETE",
          headers: {
            Authorization: accessToken,
          },
        }
      );

      if (response.ok) {
        navigate("/login", {
          state: {
            successMessage: "Your account has been deleted successfully.",
          },
        });
      } else {
        setError("Failed to delete account");
      }
    } catch (error) {
      console.error("Error deleting account:", error);
      setError("Failed to delete account");
    }
  };

  const noActiveBooking =
    !userDetails ||
    !userDetails.checkIn ||
    !userDetails.checkOut ||
    !userDetails.guests;

  let bookingInfo;

  if (noActiveBooking) {
    bookingInfo = (
      <div style={{ textAlign: "center", marginTop: "10px" }}>
        No active booking found.
      </div>
    );
  } else {
    bookingInfo = (
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
          <div>{userDetails.checkIn}</div>
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
          <div>{userDetails.checkOut}</div>
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
          <div>{userDetails.guests}</div>
        </UserDetails>
      </div>
    );
  }

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
              <div>{noActiveBooking ? "" : userDetails.checkIn}</div>
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
              <div>{noActiveBooking ? "" : userDetails.checkOut}</div>
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
              <div>{noActiveBooking ? "" : userDetails.guests}</div>
            </UserDetails>
          </div>
          {noActiveBooking ? (
            <div
              style={{ textAlign: "center", marginTop: "10px", color: "black" }}
            >
              No active booking found.
            </div>
          ) : (
            <div style={{ textAlign: "center", marginTop: "10px" }}>
              <SignUpLink to="/active-booking">Active Booking Link</SignUpLink>
            </div>
          )}
          <SectionDivider />
          <UserDetails>
            <b>Name:</b> {userDetails ? userDetails.name : ""}
          </UserDetails>
          <UserDetails>
            <b>Email:</b> {userDetails ? userDetails.email : ""}
          </UserDetails>
        </UserInfoContainer>
        {error && <ErrorMessage>{error}</ErrorMessage>}
        <Button $delete onClick={handleDeleteAccount}>
          Delete Account
        </Button>
        <Button onClick={handleLogout}>Logout</Button>
      </Content>
    </Container>
  );
};
