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

const NoBookingsMessage = styled.div`
  margin-bottom: 20px; 
`;

export const UserPage = ({ height = '100vh' }) => {
  const navigate = useNavigate();
  const { bookingDetails, setBookingDetails } = useContext(BookingContext);
  const { accessToken, logout } = useAuth();
  const [userDetails, setUserDetails] = useState(null);
  const [error, setError] = useState("");
  const [bookings, setBookings] = useState([]);
  const [successMessage, setSuccessMessage] = useState("");

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

        // Fetch user booking info
        const bookingsResponse = await fetch(
          "https://sunside-hotel.onrender.com/user-bookings",
          {
            headers: {
              Authorization: accessToken,
            },
          }
        )
        const bookings = await bookingsResponse.json();
        setBookings(bookings);
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

  const handleCancelBooking = async (bookingId) => {
    const { roomId, checkinDate, checkoutDate } = bookingDetails;
    //Cancel a booking and change room status
    try {
      const cancelBookingResult = await fetch("https://sunside-hotel.onrender.com/hotelrooms/cancel", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ bookingId, roomId, checkinDate, checkoutDate }),
      });

      if (cancelBookingResult.ok) {
        const result = await cancelBookingResult.json();
        console.log('Booking canceled successfully:', result);
        setSuccessMessage("Your booking is canceled successfully.");
        setBookingDetails({});
        setBookings();
      } else {
        console.error('Failed to cancel booking:', cancelBookingResult.statusText);
        setSuccessMessage("Failed to cancel booking. Please try again.");
      }
    } catch (error) {
      console.error('Error canceling booking:', error);
      setSuccessMessage("An error occurred while canceling the booking. Please try again.");
    }
  }

  return (
    <Container height={height} style={{ marginTop: "30px" }}>
      <Content>
        <Heading>BOOKING INFORMATION</Heading>
        {bookings && bookings.length > 0 ? (
         bookings.map((booking) => ( 
          <UserInfoContainer key={booking.id}>
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
                <div>{new Date(booking.checkinDate).toLocaleDateString("sv-SE")}</div>
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
                <div>{new Date(booking.checkoutDate).toLocaleDateString("sv-SE")}</div>
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
                <div>{booking.guests}</div>
              </UserDetails>
            </div>
            <div style={{ textAlign: "center", marginTop: "10px", color: "black" }}>
              <BlackStyledLink onClick={() => handleCancelBooking(booking._id)}>
                Click here to cancel your booking
              </BlackStyledLink>
              <p>{successMessage}</p>
            </div>
          </UserInfoContainer>
        ))
        ):(
          <NoBookingsMessage><p>{successMessage}</p> No active bookings. </NoBookingsMessage>  
        )}  

        <UserInfoContainer>
            <UserDetails>
              <b>Name:</b> {userDetails ? userDetails.name : ""}
            </UserDetails>
            <UserDetails>
              <b>Email:</b> {userDetails ? userDetails.email : ""}
            </UserDetails>
        </UserInfoContainer>
               
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
