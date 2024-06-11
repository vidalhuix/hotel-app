import React, { useState, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";
import standardRoom1 from "/src/assets/room-standard.jpg";
import standardRoom2 from "/src/assets/room-standard2.jpg";
import standardRoom3 from "/src/assets/room-standard3.jpg";
import premiumRoom1 from "/src/assets/room-premium.jpg";
import premiumRoom2 from "/src/assets/room-premium2.jpg";
import premiumRoom3 from "/src/assets/room-premium3.jpg";
import luxuryRoom1 from "/src/assets/room-luxury.jpg";
import luxuryRoom2 from "/src/assets/room-luxury2.jpg";
import luxuryRoom3 from "/src/assets/room-luxury3.jpg";
import { Footer } from "../Footer/Footer.jsx";
import { BackToTopButton } from "../BackToTopButton.jsx";
import { RoomsSlide } from "./RoomsSlide.jsx";
import { LoadingSpinner } from "../LoadingSpinner.jsx";

export const Roomspage = () => {
  const standardImages = [standardRoom1, standardRoom2, standardRoom3];
  const premiumImages = [premiumRoom1, premiumRoom2, premiumRoom3];
  const luxuryImages = [luxuryRoom1, luxuryRoom2, luxuryRoom3];

  const [expandedRoom, setExpandedRoom] = useState(null);
  const [roomData, setRoomData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    axios
      .get("https://sunside-hotel.onrender.com/hotelrooms")
      .then((response) => {
        setRoomData(response.data);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error("There was an error fetching the room data!", error);
        setIsLoading(false);
      });
  }, []);

  const toggleRoomDetails = (roomType) => {
    setExpandedRoom(expandedRoom === roomType ? null : roomType);
  };

  const renderRoomDetails = (roomType) => {
    const room = roomData.find((room) => room.type === roomType);
    if (!room) return null;

    return (
      <RoomDetails>
        <div className="basic-info">
          <p>{room.price} €</p>
          <p>{room.size} m²</p>
          <p>{room.capacity} 👥</p>
        </div>
        <p>{room.description}</p>
        <p>Facilities: {room.facilities.join(", ")}.</p>
      </RoomDetails>
    );
  };

  if (isLoading) {
    return <LoadingSpinner />;
  }

  return (
    <RoomsContainer>
      <Grid>
        <RoomsSlide images={standardImages} />
        <GridItem>
          <div>
            <h3>Standard</h3>
            {expandedRoom === "Standard" && renderRoomDetails("Standard")}
            <ReadMoreButton onClick={() => toggleRoomDetails("Standard")}>
              {expandedRoom === "Standard" ? "Read less" : "Read more"}
            </ReadMoreButton>
          </div>
        </GridItem>
        <RoomsSlide images={premiumImages} />
        <GridItem className="shift-left">
          <div>
            <h3>Premium suite</h3>
            {expandedRoom === "Premium Suite" &&
              renderRoomDetails("Premium Suite")}
            <ReadMoreButton onClick={() => toggleRoomDetails("Premium Suite")}>
              {expandedRoom === "Premium Suite" ? "Read less" : "Read more"}
            </ReadMoreButton>
          </div>
        </GridItem>
        <RoomsSlide images={luxuryImages} />
        <GridItem>
          <div>
            <h3>Luxury</h3>
            {expandedRoom === "Luxury" && renderRoomDetails("Luxury")}
            <ReadMoreButton onClick={() => toggleRoomDetails("Luxury")}>
              {expandedRoom === "Luxury" ? "Read less" : "Read more"}
            </ReadMoreButton>
          </div>
        </GridItem>
      </Grid>
      <Footer />
      <BackToTopButton />
    </RoomsContainer>
  );
};

const RoomsContainer = styled.div`
  background-color: #44564c;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 100px;
  padding-top: 100px;
`;

const Grid = styled.div`
  background-color: white;
  max-width: 1500px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  grid-template-rows: 1fr auto 1fr auto 1fr auto;

  @media (min-width: 1000px) {
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(3, 1fr);

    .shift-left {
      grid-column: 1;
      grid-row: 2;
    }
  }
`;

const GridItem = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  > div {
    padding: 15px 50px 50px 50px;
    text-align: center;

    @media (min-width: 1000px) {
      padding: 15px 50px 100px 50px;
    }
    @media (min-width: 1000px) {
      padding: 0;
    }

    h3 {
      text-transform: uppercase;
      margin: 0;
    }
    p {
      margin: 15px 0 20px 0;
    }
  }
`;

const ReadMoreButton = styled.button`
  display: block;
  margin: 20px auto 70px auto;
  padding: 10px 20px;
  background-color: #ffffff;
  border: 1px solid black;
  border-radius: 30px;
  font-size: 1rem;
  text-decoration: none;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    transform: scale(1.05);
    transition: all ease 0.3s;
  }

  @media (max-width: 768px) {
    padding: 10px 15px;
  }
`;

const RoomDetails = styled.div`
  margin: 20px auto;
  max-width: 500px;

  p {
    margin: 10px 0;
  }

  .basic-info {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    font-weight: bold;
    p {
      margin: 0;
    }
  }
`;
