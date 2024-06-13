import React, { useContext, useEffect } from "react";
import styled from "styled-components";
import { useLocation } from "react-router-dom";
import { Register } from "../User/Register";
import { BookingContext } from "./BookingContext";
import exit from "../../assets/exit.png";
import enter from "../../assets/enter.png";
import guest from "../../assets/guest.png";

const Container = styled.div`
  background-color: #44564c;
  color: white;
  display: flex;
  height: auto;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20% 5% 36% 5%;
  h4 {
    margin: 0;
  }
  @media all and (min-width: 744px) {
    height: 100vh;
    min-height: 768px;
    padding: 20% 10%;
  }
  @media all and (min-width: 1025px) {
    flex-direction: row;
  }
`;

const SummaryContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: auto;
  margin-top: 100px;
  margin-bottom: 20px;
  padding: 16px 24px 40px 40px;
  background: white;
  color: black;
  h2 {
    font-size: 1.2em;
  }
  @media all and (min-width: 744px) {
    padding: 20px 32px 40px 50px;
    margin-top: 50px;
    h2 {
      font-size: 1.5em;
    }
  }
  @media all and (min-width: 1025px) {
    width: 40%;
    margin-top: 50px;
    margin-right: 100px;
    padding: 30px 32px 60px 50px;
  }
`;

const TextBox = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 6px;
`;

export const BookingConfirm = ({ guests }) => {
  const location = useLocation();
  const { successMessage, roomType, checkinDate, checkoutDate, roomId } =
    location.state || {};
  const { setBookingDetails } = useContext(BookingContext);

  useEffect(() => {
    setBookingDetails({ checkinDate, checkoutDate, guests, roomType, roomId });
  }, [checkinDate, checkoutDate, guests, roomType, roomId, setBookingDetails]);

  return (
    <Container>
      <SummaryContainer>
        <h2>BOOKING SUMMARY</h2>
        <p>{successMessage}</p>
        <h4>Room type: {roomType}</h4>
        <TextBox>
          <img
            src={enter}
            alt="Check-in"
            style={{ marginRight: "10px", width: "30px", height: "30px" }}
          />
          Check-in: {checkinDate}
        </TextBox>
        <TextBox>
          <img
            src={exit}
            alt="Check-out"
            style={{ marginRight: "10px", width: "30px", height: "30px" }}
          />
          Check-out: {checkoutDate}
        </TextBox>
        <TextBox>
          <img
            src={guest}
            alt="Guests"
            style={{ marginRight: "10px", width: "30px", height: "30px" }}
          />
          Guests: {guests}
        </TextBox>
      </SummaryContainer>
      <Register height="30vh" />
    </Container>
  );
};
