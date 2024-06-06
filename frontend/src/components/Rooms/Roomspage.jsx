import React from "react";
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

export const Roomspage = () => {
  const standardImages = [standardRoom1, standardRoom2, standardRoom3];
  const premiumImages = [premiumRoom1, premiumRoom2, premiumRoom3];
  const luxuryImages = [luxuryRoom1, luxuryRoom2, luxuryRoom3];

  return (
    <RoomsContainer>
      <Grid>
        <RoomsSlide images={standardImages} />
        <GridItem>
          <div>
            <h3>Standard</h3>
            <p>Every thing you need.</p>
            <a href="/book/standard-room">
              <ReadMoreButton>Read more</ReadMoreButton>
            </a>
          </div>
        </GridItem>
        <RoomsSlide  images={premiumImages} />
        <GridItem className="shift-left">
          <div>
            <h3>Premium suite</h3>
            <p>Unwind in style and comfort in our Premium Room.</p>
            <a href="/book/premium-room">
              <ReadMoreButton>Read more</ReadMoreButton>
            </a>
          </div>
        </GridItem>
        <RoomsSlide images={luxuryImages} />
        <GridItem>
          <div>
            <h3>Luxury</h3>
            <p>Indulge in unparalleled luxury in our lavish Suite.</p>
            <a href="/book/luxury-room">
              <ReadMoreButton>Read more</ReadMoreButton>
            </a>
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
  div {
    padding: 15px 50px 100px 50px;
    text-align: center;

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
    a {
      text-decoration: none;
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
