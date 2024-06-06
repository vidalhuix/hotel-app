import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import styled from "styled-components";

export const RoomsSlide = ({ images }) => {
  return (
    <SplideContainer  className="shift-right">
      <Splide
        aria-label="Room Images"
        options={{
          type: "loop",
          perPage: 1,
          perMove: 1,
          arrows: "false",
          speed: 600,
          // gap: 50,
          pagination: "slider",
          padding: { left: "0rem", right: "0rem" },
          easing: "cubic-bezier(0.25, 1, 0.5, 1)",
          arrows: false,
        }}
      >
        {images.map((image, index) => (
          <SplideSlide key={index}>
            <img src={image} alt={`Slide ${index + 1}`} />
          </SplideSlide>
        ))}
      </Splide>
    </SplideContainer>
  );
};

const SplideContainer = styled.div`
  width: 100%;
  height: 100%;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  .splide__track {
    height: 250px;
    
    @media (min-width: 500px) {
      height: 400px; 
    }
    @media (min-width: 800px) {
      height: 600px; 
    }
  }
`;
