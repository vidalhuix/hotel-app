import React, { useState } from "react";
import styled from "styled-components";
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

const roomData = {
  Standard: {
    price: "110 €",
    size: "28 m²",
    capacity: 2,
    description:
      "Give life a little more space. Take a break from everyday life and let time stand still for a while. Our luxury room has a scandinavian romantic interior style. With fragile lace, porcelain figurines and details.",
    facilities: ["Free WiFi", "Air Conditioning", "Flat Screen TV", "Minibar"],
  },
  "Premium Suite": {
    price: "180 €",
    size: "64 m²",
    capacity: 4,
    description:
      "In our suites you live extra comfortably with a separate bedroom and a living room. All suites have a double bed and sofa bed which can accommodate three adults or two adults and two children. Perfect when you want to stay with the whole family.",
    facilities: [
      "Free WiFi",
      "Air Conditioning",
      "Flat Screen TV",
      "Minibar",
      "Working table",
      "Jacuzzi",
      "Balcony",
    ],
  },
  Luxury: {
    price: "150 €",
    size: "37 m²",
    capacity: 2,
    description:
      "Art deco-inspired rooms with fitted fabrics, wallpaper in period colours, sober lighting and fully tiled bathrooms. Of course you will find a comfortable workplace in these rooms, sometimes you also have to do your must dos.",
    facilities: [
      "Free WiFi",
      "Air Conditioning",
      "Flat Screen TV",
      "Minibar",
      "Working table",
    ],
  },
};

export const Roomspage = () => {
  const standardImages = [standardRoom1, standardRoom2, standardRoom3];
  const premiumImages = [premiumRoom1, premiumRoom2, premiumRoom3];
  const luxuryImages = [luxuryRoom1, luxuryRoom2, luxuryRoom3];

  const [expandedRoom, setExpandedRoom] = useState(null);

  const toggleRoomDetails = (roomType) => {
    setExpandedRoom(expandedRoom === roomType ? null : roomType);
  };

  const renderRoomDetails = (roomType) => {
    const room = roomData[roomType];
    if (!room) return null;

    return (
      <RoomDetails>
        <div className="basic-info">
          <p>{room.price}</p>
          <p>{room.size}</p>
          <p>{room.capacity} 👥</p>
        </div>
        <p>{room.description}</p>
        <p>Facilities: {room.facilities.join(", ")}.</p>
      </RoomDetails>
    );
  };

  return (
    <RoomsContainer>
      <Grid>
        <RoomsSlide images={standardImages} />
        <GridItem>
          <div>
            <h3>Standard</h3>
            {/* <p>Every thing you need.</p> */}
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
            {/* <p>Unwind in style and comfort in our Premium Room.</p> */}
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
            {/* <p>Indulge in unparalleled luxury in our lavish Suite.</p> */}
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
  /* padding: 20px; */
 max-width: 500px;

  p {
    margin: 10px 0;
  }

  .basic-info {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    font-weight: bold;
    p {
      margin:0;
    }
  }
`;
