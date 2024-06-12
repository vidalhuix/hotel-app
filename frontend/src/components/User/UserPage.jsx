import { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { BookingContext } from "../Booking/BookingContext";
import { useAuth } from "./AuthContext";
import {
  Container,
  Button,
  StyledLink,
  ErrorMessage,
} from "./UserStyledComponents";
import styled from "styled-components";
import exit from "../../assets/exit.png";
import enter from "../../assets/enter.png";
import guest from "../../assets/guest.png";

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

const StyledImage = styled.img`
  margin-bottom: 5px;
  width: 30px;
  height: 30px;
`;

const BlackStyledLink = styled(StyledLink)`
  color: black;

  &:hover {
    color: #d3af97;
  }
`;

const SectionDivider = styled.div`
  width: 100%;
  height: 1px;
  background-color: #ccc;
  margin-top: 15px;
  margin-bottom: 15px;
`;

export const UserPage = () => {
  const { bookingDetails } = useContext(BookingContext);
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
        `https://sunside-hotel.onrender.com/users/${userDetails?._id}`,
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

  return (
    <Container style={{ marginTop: "30px" }}>
      <Content>
        <Heading>BOOKING INFORMATION</Heading>
        {bookingDetails && ( 
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
                <StyledImage src={enter} alt="Check-in" />
                <b>Check-in:</b>
                <div>{bookingDetails.checkinDate}</div>
              </UserDetails>
              <UserDetails
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  marginRight: "15px",
                }}
              >
                <StyledImage src={exit} alt="Check-out" />
                <b>Check-out:</b>
                <div>{bookingDetails.checkoutDate}</div>
              </UserDetails>
              <UserDetails
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                <StyledImage src={guest} alt="Guests" />
                <b>Guests:</b>
                <div>{bookingDetails.guests}</div>
              </UserDetails>
            </div>
            <div style={{ textAlign: "center", marginTop: "10px" }}>
              <BlackStyledLink to="/active-booking">
                Click here to cancel your booking
              </BlackStyledLink>
            </div>
            <SectionDivider />
            <UserDetails>
              <b>Name:</b> {userDetails ? userDetails.name : ""}
            </UserDetails>
            <UserDetails>
              <b>Email:</b> {userDetails ? userDetails.email : ""}
            </UserDetails>
          </UserInfoContainer>
        )}
        {error && <ErrorMessage>{error}</ErrorMessage>}
        <Button
          $delete
          onClick={handleDeleteAccount}
          style={{ marginRight: "10px", marginTop: "0" }}
        >
          Delete Account
        </Button>
        <Button
          onClick={handleLogout}
          style={{ marginLeft: "10px", marginTop: "0" }}
        >
          Logout
        </Button>
      </Content>
    </Container>
  );
};
