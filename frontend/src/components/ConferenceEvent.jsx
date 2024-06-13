import React, { useState } from "react";
import styled from "styled-components";
import eventHero from "/src/assets/event-hero.jpg";
import eventOffice1 from "/src/assets/event-office1.jpg";
import eventOffice2 from "/src/assets/event-office2.jpg";
import eventOffice3 from "/src/assets/event-office3.jpg";
import eventFamily1 from "/src/assets/event-family1.jpg";
import eventFamily2 from "/src/assets/event-family2.jpg";
import eventFamily3 from "/src/assets/event-family3.jpg";
import eventWedding1 from "/src/assets/event-wedding1.jpg";
import eventWedding2 from "/src/assets/event-wedding2.jpg";
import eventWedding3 from "/src/assets/event-wedding3.jpg";
import { Footer } from "./Footer/Footer.jsx";
import { BackToTopButton } from "./BackToTopButton.jsx";
import { RoomsSlide } from "./Rooms/RoomsSlide.jsx";
import { HashLink } from "react-router-hash-link";

export const ConferenceEvent = () => {
  const officeImages = [eventOffice1, eventOffice2, eventOffice3];
  const familyImages = [eventFamily1, eventFamily2, eventFamily3];
  const weddingImages = [eventWedding1, eventWedding2, eventWedding3];

  const [expandedEvent, setExpandedEvent] = useState(null);

  const toggleEventDetails = (eventType) => {
    setExpandedEvent(expandedEvent === eventType ? null : eventType);
  };

  const renderEventDetails = (eventType) => {
    const eventDetails = {
      Office: {
        price: "500 €",
        size: "50 m²",
        capacity: "30 👥",
        description:
          "Perfect for office meetings and corporate events with essential facilities.",
        facilities: ["Wi-Fi", "Projector", "Whiteboard", "Air Conditioning"],
      },
      Family: {
        price: "1000 €",
        size: "100 m²",
        capacity: "50 👥",
        description:
          "Ideal for family gatherings and celebrations with all necessary amenities.",
        facilities: [
          "Wi-Fi",
          "TV",
          "Play Area",
          "Air Conditioning",
          "Catering",
        ],
      },
      Wedding: {
        price: "Min 5000 €",
        size: "200m²",
        capacity: "100 👥",
        description:
          "A luxurious venue for weddings with top-notch facilities.",
        facilities: [
          "Wi-Fi",
          "Sound System",
          "Lighting",
          "Air Conditioning",
          "Catering",
          "Decoration",
        ],
      },
    };

    const event = eventDetails[eventType];
    if (!event) return null;

    return (
      <EventDetails>
        <div className="basic-info">
          <p>{event.price}</p>
          <p>{event.size}</p>
          <p>{event.capacity}</p>
        </div>
        <p>{event.description}</p>
        <p>Facilities: {event.facilities.join(", ")}.</p>
        <HashLink smooth to="/about#contact">
          <p>Contact us for more information.</p>
        </HashLink>
      </EventDetails>
    );
  };

  return (
    <EventsContainer>
      <Hero>
        <div>
          <h2 className="from-top">Conferences & Events at Sunside</h2>
          <p  className="from-bottom">
            Experience exceptional conferences and events at Sunside. We cater
            to corporate meetings, family celebrations, and grand weddings. Let
            us create memorable experiences in an elegant and professional
            setting.
          </p>
        </div>
        <img src={eventHero} alt="hero image conference & event" />
      </Hero>
      <Grid className="from-bottom">
        <RoomsSlide images={officeImages} />
        <GridItem>
          <div>
            <h3>Office</h3>
            {expandedEvent === "Office" && renderEventDetails("Office")}
            <ReadMoreButton onClick={() => toggleEventDetails("Office")}>
              {expandedEvent === "Office" ? "Read less" : "Read more"}
            </ReadMoreButton>
          </div>
        </GridItem>
        <RoomsSlide images={familyImages} />
        <GridItem className="shift-left">
          <div>
            <h3>Family</h3>
            {expandedEvent === "Family" && renderEventDetails("Family")}
            <ReadMoreButton onClick={() => toggleEventDetails("Family")}>
              {expandedEvent === "Family" ? "Read less" : "Read more"}
            </ReadMoreButton>
          </div>
        </GridItem>
        <RoomsSlide images={weddingImages} />
        <GridItem>
          <div>
            <h2>Wedding</h2>
            {expandedEvent === "Wedding" && renderEventDetails("Wedding")}
            <ReadMoreButton onClick={() => toggleEventDetails("Wedding")}>
              {expandedEvent === "Wedding" ? "Read less" : "Read more"}
            </ReadMoreButton>
          </div>
        </GridItem>
      </Grid>
      <Footer />
      <BackToTopButton />
    </EventsContainer>
  );
};

const EventsContainer = styled.div`
  background-color: #44564c;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 0px;
  padding-top: 100px;
`;

const Hero = styled.div`
  position: relative;
  width: 100%;
  height: 500px;
  display: flex;
  color: var(--color-white);
  flex-direction: column;
  justify-content: end;
  align-items: center;
  
  > img {
    transform-origin: bottom;
    width: 100%;
    object-fit: cover;
    margin-bottom: 50px;
    
    animation: fade-in linear;
    animation-timeline: view();
  }

  @keyframes fade-in {
    from {
      scale: 0;
    }
    to {
      scale: 2;
    }
  }

  div {
    z-index: 10;
    position: absolute;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    max-width: 700px;
    margin: auto;
    bottom: 100px;
    h2 {
      font-size: 40px;
      line-height: 44px;
      font-weight: 700;
      font-family: "Apercu", sans-serif;
      }
    p {
      animation: slideTop 1.5s ease-in-out;
    text-align: center;
    }
    }


  }
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

const EventDetails = styled.div`
  margin: 20px auto;
  max-width: 500px;

  p {
    margin: 10px 0;
  }
  a {
    text-decoration: none;
    color: var(--color-gold);
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
