import styled from "styled-components";

// Styling for the booking container  
const BookingContainer = styled.div`
  width: 70%;
  max-width: 1200px;
  height: auto;
  z-index: 1;
  color: #000;
  background-color: #fff;
  border-radius: 10px;
  justify-content: space-between;
  align-items: center;
  margin: 0px auto 0 auto;
  position: relative;
  top: -60px;
  padding: 4px 40px 12px 40px;
  font-family: 'Apercu Pro', sans-serif;
  font-size: 16px;
  display: flex;
  box-shadow: 0 3px 60px rgba(0, 0, 0, .05);
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
  line-height: normal;
  padding: 4px 15px;
`;

// Styling for the search button
const SearchButton = styled.button`
  width: 120px;
  font-family: 'Apercu Pro', sans-serif;  
  font-size: 16px;
  text-align: center;
  cursor: pointer;
  -webkit-font-smoothing: antialiased;
  -webkit-tap-highlight-color: #0000;
  background-color: #44564c;
  border: 1px solid #44564c;
  border-radius: 30px;
  position: relative;
  color: #fff;
  text-decoration: none;
  font-weight: 400;
  padding: 10px 15px;
`;

export const Booking = () => {
  return (
    <>
      <BookingContainer>
        <SubBookingContainer>
          <SelectTitle>Arrive Date:</SelectTitle>
          <SelectBox name="date" id="date">
            <option value="">2024-05-29</option>
            <option value="">2024-05-30</option>
            <option value="">2024-05-31</option>
          </SelectBox>
        </SubBookingContainer>

        <SubBookingContainer>
          <SelectTitle>Choose number of guests:</SelectTitle>
          <SelectBox name="guest" id="guest">
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
          </SelectBox>
        </SubBookingContainer>
        <SearchButton>Search</SearchButton>
      </BookingContainer>
    </>
  )
}