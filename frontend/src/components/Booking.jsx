import styled from "styled-components";
import React, { useState } from 'react';

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
  margin: 0px auto 0 auto;
  font-family: 'Apercu Pro', sans-serif;
  font-size: 16px;
  text-align: left;
  position: relative;
  top: -100px;
  box-shadow: 0 3px 60px rgba(0, 0, 0, .05);
  box-sizing: border-box;
 
  @media all and (min-width: 744px) {
    flex-direction: row;
    max-width: 900px;
    text-align: center;
    justify-content: center;
    padding: 4px 40px 12px 40px;
  }

  @media all and (min-width: 1024px) {
    flex-direction: row;
    max-width: 1200px;
    justify-content: space-between;
    padding: 4px 40px 12px 40px;
    align-items: center;
    box-shadow: 0 3px 60px rgba(0, 0, 0, .05);
  }
`;

// Styling for the date and guest container
const SubBookingContainer = styled.div`
  font-weight: 700;
  padding: 10px 15px;
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
    width: 120px;
    height: auto;
  }

  @media all and (min-width: 1024px) {
    width: 120px;
    -webkit-font-smoothing: antialiased;
    -webkit-tap-highlight-color: #0000;
    font-weight: 400;
    height: auto;
  }
`

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-top: 20px;
  padding: 10px 15px;
`;

const Label = styled.label`
  font-size: 16px;
  font-weight: bold;
`;

const NumberInputContainer = styled.div`
  display: flex;
  align-items: center;
`;

const NumberButton = styled.button`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  text-align: center;
  font-size: 16px;
  font-weight: 600;
  display: flex;
  align-items: center;
  justify-content: center;
  background:#44564c;
  color:white;
  cursor: pointer;
  border: none;
  padding-top: 0;

  &:disabled {
    cursor: not-allowed;
    opacity: 0.5;
  }
`;

const Input = styled.input`
  width: 50px;
  text-align: center;
  border: 1px solid #ccc;
  margin: 0 5px;
`;

const DateInput = styled.input`
  padding: 5px;
  font-size: 16px;
  width: 100%;
`;
  
export const Booking = () => {
  const [adults, setAdults] = useState(0);
  const [children, setChildren] = useState(0);

  const changeNumber = (setter, delta) => {
    setter(prevValue => Math.max(prevValue + delta, 0));
  };

  return (
    <>
      <BookingContainer>
        <SubBookingContainer>
          <SelectTitle>Arrive Date:</SelectTitle>
          <DateInput type="date" name="date" id="date" required />
        </SubBookingContainer>

        <SubBookingContainer>
          <SelectTitle>Choose number of guests:</SelectTitle>
          <SelectBox name="guest" id="guest">
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
          </SelectBox>
        </SubBookingContainer>

        <SubBookingContainer>
          <SelectTitle>  </SelectTitle>
          <SearchButton>Search</SearchButton>
        </SubBookingContainer>

        {/* <Form>
          <Label htmlFor="adults">Number of Adults:</Label>
          <NumberInputContainer>
            <NumberButton onClick={() => changeNumber(setAdults, -1)} disabled={adults <= 1}>-</NumberButton>
            <Input type="number" id="adults" value={adults} readOnly />
            <NumberButton onClick={() => changeNumber(setAdults, 1)} disabled={adults >= 4}>+</NumberButton>
          </NumberInputContainer>

          <Label htmlFor="children">Number of Children:</Label>
          <NumberInputContainer>
            <NumberButton onClick={() => changeNumber(setChildren, -1)} disabled={children <= 0}>-</NumberButton>
            <Input type="number" id="children" value={children} readOnly />
            <NumberButton onClick={() => changeNumber(setChildren, 1)} disabled={children >= 3}>+</NumberButton>
          </NumberInputContainer>
        </Form> */}
      </BookingContainer>
    </>
  )
}