import React, { useState, useEffect } from 'react'
import styled from "styled-components";
import { useNavigate } from "react-router-dom"; 
import { RoomsSlide } from '../Rooms/RoomsSlide';

export const RoomResults = ({ rooms, checkinDate }) => {
  const navigate = useNavigate();

  const getNextDay = (date) => {
    const nextDay = new Date(date);
    nextDay.setDate(nextDay.getDate() + 1);
    return nextDay.toISOString().split('T')[0]; // Format the date to YYYY-MM-DD
  };

  const [checkoutDate, setCheckoutDate] = useState(getNextDay(checkinDate));

  useEffect(() => {
    setCheckoutDate(getNextDay(checkinDate));
  }, [checkinDate]);


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

  const handleBookingSubmit = (e, roomType) => {
    e.preventDefault();

    fetch("https://sunside-hotel.onrender.com/hotelrooms/booking/check-availability", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ checkinDate, checkoutDate, roomType }),
    })
      .then((response) => response.json())
      .then((data) => {
        navigate("/bookingconfirm", {
          state: {
            successMessage: "Room is available under this period. Please confirm your booking details and register your account.",
            roomType,
            checkinDate,
            checkoutDate,
            roomId: data.availableRoomId
          },
        });
      })
      .catch((error) => {
        console.error('Unavailable:', error);
      });
  }; 

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
              
              <BookingForm onSubmit={(e) => handleBookingSubmit(e, room.type)}>
                <SubBookingContainer>
                  <SelectTitle htmlFor="date">Leave Date:</SelectTitle>
                  <DateInput 
                    type="date" 
                    id="checkoutDate"
                    value={checkoutDate}
                    min={checkoutDate}
                    onChange={(e) => setCheckoutDate(e.target.value)} 
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

const Container = styled.div`
  background-color: #44564c;
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-top:20px;
  margin-top: 100px;
  padding-bottom: 100px;
  gap:40px;
  @media all and (min-width: 744px) {
    padding-top:0px;
  }
  @media all and (min-width: 1024px) {
    padding-top:80px;
  }
`;

const Grid = styled.div`
  background-color: white;
  max-width: 1500px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  h2{
    font-size: 1.2em;
    margin: 0.3em;
  }
  @media all and (min-width: 744px) {
    h2{
      font-size: 1.5em;
      margin: 0.83em;
    }
  }
  @media all and (min-width: 1025px) {
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
  padding: 16px 22px;
  font-family: 'Apercu Pro', sans-serif;
  gap: 10px;
  @media all and (min-width: 744px) {
    padding: 26px 48px;
  }
`;

const GridPscContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap: 30px;
  @media all and (min-width: 744px) {
    gap: 80px;
  }
`;

const Gridpsc = styled.div`
  text-align: right; 
  font-family: 'Apercu Pro', sans-serif;
  font-size: 14px;
  @media all and (min-width: 744px) {
    font-size: 16px; 
  }
`;

const GridDescription = styled.div`
  text-align: justify; 
  font-family: 'Apercu Pro', sans-serif;
  margin-top: 20px;
  font-size: 14px;
  @media all and (min-width: 744px) {
    font-size: 16px; 
  }
`;

const GridFacility = styled.ul` 
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-column-gap: 60px;
  margin: 10px 0;
  font-size: 12px;
  @media all and (min-width: 744px) {
    font-size: 14px; 
    grid-column-gap: 80px;
  }
`;

const FacilityItem = styled.li`
  padding: 8px 0;
  font-family: 'Apercu Pro', sans-serif;
`;

const BookingForm = styled.form`
  width: 70%;
  height: auto;
  color: #000;
  background-color: #fff;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  gap: 0px;
  padding: 0px;
  margin-bottom: 12px;
  font-family: 'Apercu Pro', sans-serif;
  font-size: 14px;
  text-align: left;
  @media all and (min-width: 744px) {
    flex-direction: row;
    justify-content: center;
    padding: 16px 40px;
    gap: 40px;
    font-size: 14px;
  }

  @media all and (min-width: 1025px) {
    align-items: center;
    justify-content: space-between;
    gap: 80px;
    font-size: 16px;
    height: 10em;
  }
`;

// Styling for the date container
const SubBookingContainer = styled.div`
  width: 100%;
  font-weight: 700;
  padding: 0px 15px 10px 15px;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media all and (min-width: 744px) { 
    align-items: flex-start;
  }
`;

const ButtonContainer = styled.div`
  width: 100%;
  font-weight: 700;
  display: flex;
  flex-direction: column;
  color: white;
  align-items: center;
  @media all and (min-width: 1025px) {
    width: 30%;
    padding: 0 5px;
  }
`;

// Styling for the date selection title
const SelectTitle = styled.label`
  font-family: 'Apercu Pro', sans-serif;
  padding-bottom: 7px;
  color: #111112;
  text-align: left;
  font-weight: 400;
  line-height: 1.3;
  font-size: 14px;
  @media all and (min-width: 744px) {
    font-size: 16px; 
  }
`;

const ButtonTitle = styled.div`
  font-family: 'Apercu Pro', sans-serif;
  color: white;
  text-align: left;
  font-size:14px;
  display: none;
  @media all and (min-width: 744px) {
    line-height: 1.1;
    padding-bottom: 7px;
    font-size:16px;
    font-weight: 400; 
    display: block;
  }
  @media all and (min-width: 1025px) {
    line-height: 0.7;
  }
`;

// Styling for the book now button
const SearchButton = styled.button`
  padding: 10px 15px;
  font-family: 'Apercu Pro', sans-serif;  
  font-size: 14px;
  text-align: center;
  cursor: pointer;
  width: 130px;
  background-color: #44564c;
  border: none;
  border-radius: 30px;
  color: #fff;
  @media all and (min-width: 744px) {
    height: auto;
    font-size: 16px;
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
  width: 120px;
  font-size: 14px;
  @media all and (min-width: 744px) {
    font-size: 16px; 
    width: 140px;
  }
`;