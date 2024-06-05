import styled from "styled-components";
import React, { useState } from 'react';
import { Link, useNavigate } from "react-router-dom"; 

// Styling for the booking container  
const BookingContainer = styled.div`
  width: 70%;
  height: auto;
  z-index: 1;
  color: #000;
  background-color: #fff;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  padding: 20px;
  margin: 0px auto 30px auto;
  font-family: 'Apercu Pro', sans-serif;
  font-size: 16px;
  text-align: left;
  position: relative;
  box-shadow: 0 3px 60px rgba(0, 0, 0, .05);
  box-sizing: border-box;
 
  @media all and (min-width: 744px) {
    flex-direction: column;
    max-width: 900px;
    justify-content: center;
    padding: 16px 40px;
    top: -13em;
    margin: 0px auto 0px auto;
  }

  @media all and (min-width: 1025px) {
    flex-direction: row;
    max-width: 1200px;
    padding: 16px 40px;
    align-items: center;
    box-shadow: 0 3px 60px rgba(0, 0, 0, .05);
    top: -13em;
    margin: 0px auto 0px auto;
    justify-content: space-between;
  }
`;

// Styling for the date/guest container
const SubBookingContainer = styled.div`
  width: 100%;
  font-weight: 700;
  padding: 10px 15px;
`;

const ButtonContainer = styled.div`
  width: 100%;
  font-weight: 700;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  color: white;
  
  @media all and (min-width: 744px) {
    
  }

  @media all and (min-width: 1025px) {
    width: 30%;
    padding: 0 5px;
    flex-grow: 1;
  }
`;

// Styling for the date and guest selection title
const SelectTitle = styled.div`
  font-family: 'Apercu Pro', sans-serif;
  padding-bottom: 7px;
  color: #111112;
  text-align: left;
  font-size:16px;
  font-weight: 400;
  line-height: 1.3;
`;

const ButtonTitle = styled.div`
  font-family: 'Apercu Pro', sans-serif;
  padding-bottom: 7px;
  color: white;
  text-align: left;
  font-size:16px;
  font-weight: 400;
  line-height: 1.3;
`;

// Styling for the date and guest selection box
const SelectBox = styled.select`
  font-family: 'Apercu Pro', sans-serif; 
  color: #111112;
  width: 100%;
  box-shadow: none;
  height: auto;
  background: #fff;
  border: 1px solid #ccc;
  border-radius: 5px;
  margin: 0;
  font-size: 16px;
  font-weight: 700;
  line-height: normal;
  padding: 7px 15px;
`;

// Styling for the search button
const SearchButton = styled.button`
  padding: 10px 15px;
  letter-spacing: 0;
  box-shadow: none;
  font-family: 'Apercu Pro', sans-serif;  
  font-size: 16px;
  text-align: center;
  cursor: pointer;
  width: 100%;
  background-color: #44564c;
  border: 1px solid #44564c;
  border-radius: 30px;
  position: relative;
  color: #fff;
  text-decoration: none;
  
  @media all and (min-width: 744px) {
    height: auto;
  }

  @media all and (min-width: 1025px) {
    width: 120px;
    -webkit-font-smoothing: antialiased;
    -webkit-tap-highlight-color: #0000;
    font-weight: 400;
  }
`

const DateInput = styled.input`
  padding: 5px;
  font-size: 16px;
  width: 100%;
`;
  
export const Booking = () => {
  const [guests, setGuests] = useState(0);
  const navigate = useNavigate();

  const changeNumber = (setter, delta) => {
    setter(prevValue => Math.max(prevValue + delta, 0));
  }
  const handleRoomClick = () => {
    navigate("/hotelrooms");
  };

  return (
    <BookingContainer>
      <SubBookingContainer>
        <SelectTitle>Arrive Date:</SelectTitle>
        <DateInput type="date" name="date" id="date" required />
      </SubBookingContainer>

      <SubBookingContainer>
        <SelectTitle>Number of guests:</SelectTitle>
        <SelectBox name="guest" id="guest">
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="3">4</option>
        </SelectBox>
      </SubBookingContainer>
      
      <ButtonContainer>
        <ButtonTitle> s </ButtonTitle>
        <SearchButton onClick={handleRoomClick}>Search</SearchButton>
      </ButtonContainer>
    </BookingContainer>
  )
}