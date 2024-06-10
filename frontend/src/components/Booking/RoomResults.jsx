import React, { useState } from 'react'
import styled from "styled-components";
import { useNavigate } from "react-router-dom"; 

const Container = styled.div`
  background-color: #44564c;
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-top:100px;
  margin-top: 100px;
  padding-bottom: 100px;
  gap:40px;
`;

const Grid = styled.div`
  background-color: white;
  max-width: 1500px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(1, 1fr);

  @media (min-width: 1000px) {
    grid-template-columns: repeat(2, 1fr);
    .shift-right {
      grid-column: 2 / span 1;
      grid-row: 2;
    }
  }
`;

const GridItemImg = styled.div`
  img {
    height: 600px;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const GridItem = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 26px 48px;
  font-family: 'Apercu Pro', sans-serif;
  gap: 10px;
  div {
    padding: 15px 50px 100px 50px;
    text-align: center;
    @media (min-width: 1000px) {
      padding: 0;
    }
    h2 {
      text-transform: uppercase;
      margin: 0;
      font-family: 'Apercu Pro', sans-serif;
    }
    p {
      margin: 15px 0 20px 0;
    }
    a {
      text-decoration: none;
    }
  }
`;

const GridPscContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap: 80px;
`;

const Gridpsc = styled.div`
  text-align: right; 
  font-family: 'Apercu Pro', sans-serif;
  font-size: 16px; 
`;

const GridDescription = styled.div`
  text-align: center; 
  font-family: 'Apercu Pro', sans-serif;
  font-size: 16px; 
  margin-top: 20px;
`;

const GridFacility = styled.ul`
  font-size: 14px; 
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-column-gap: 80px;
  margin: 10px 0;
`;

const FacilityItem = styled.li`
  padding: 8px 0;
  font-family: 'Apercu Pro', sans-serif;
`;

export const RoomResults = ({ rooms }) => {
  const filterRoomsByType = (rooms) => {
    const roomMap = new Map();
    rooms.forEach((room) => {
        if (!roomMap.has(room.type)) {
            roomMap.set(room.type, room);
        }
    });
    return Array.from(roomMap.values());
};

const filteredRooms = filterRoomsByType(rooms);

  if (filteredRooms.length === 0) {
    return (
      <Container>
      <p>No rooms available for the selected date and guest amount.</p>
      </Container>
    );
  }

 /*  const [date, setDate] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
      e.preventDefault();
      onSearch(date);
      navigate('/hotelrooms');
  }; */

  return (
    <Container>
      {filteredRooms.map((room) => (
          <Grid>
            <GridItemImg>
              <img src={room.image} alt="room-image"></img>
            </GridItemImg>
            <GridItem>
              <h2>{room.type}</h2>
              <GridPscContainer>
                <Gridpsc>Price: {room.price} €</Gridpsc>
                <Gridpsc>Size: {room.size} m2</Gridpsc>
                <Gridpsc>Capacity: {room.capacity}</Gridpsc>
              </GridPscContainer>
              
              <GridDescription>{room.description}</GridDescription>
              
              <GridFacility>
                {room.facilities.map((facility, index) => (
                  <FacilityItem key={index}>
                    {facility}
                  </FacilityItem>
                ))}
              </GridFacility>
              <BookingForm>
                <SubBookingContainer>
                  <SelectTitle htmlFor="date">Checkout:</SelectTitle>
                  <DateInput 
                    type="date" 
                    id="date"
                    //value={date}
                    // onChange={(e) => setDate(e.target.value)} 
                    required />
                </SubBookingContainer>
                    
                <ButtonContainer>
                  <ButtonTitle> s </ButtonTitle>
                  <SearchButton type="submit">Book Now</SearchButton>
                </ButtonContainer>
              </BookingForm>
            </GridItem>   
          </Grid>
      ))}
    </Container>
  )
}


const BookingForm = styled.form`
  width: 70%;
  height: 10em;
  z-index: 1;
  color: #000;
  background-color: #fff;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  gap: 80px;
  padding: 20px;
  margin: 0;
  font-family: 'Apercu Pro', sans-serif;
  font-size: 16px;
  text-align: left;
  box-sizing: border-box;
 
  @media all and (min-width: 744px) {
    flex-direction: column;
    justify-content: center;
    padding: 16px 40px;
  }

  @media all and (min-width: 1025px) {
    flex-direction: row;
    padding: 16px 40px;
    align-items: center;
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
const SelectTitle = styled.label`
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