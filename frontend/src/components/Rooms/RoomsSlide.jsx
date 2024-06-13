import React, { useState, useEffect } from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import styled from "styled-components";

export const RoomsSlide = ({ images }) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 300); // delay

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {isLoading && (
        <div className="loading-state">
          <div className="loading"></div>
        </div>
      )}
      {!isLoading && (
        <SplideContainer className="shift-right">
          <Splide
            aria-label="Room Images"
            options={{
              type: "loop",
              perPage: 1,
              perMove: 1,
              speed: 600,
              focus: 1,
              pagination: "slider",
              arrows: false, 
              padding: { left: "0rem", right: "0rem" },
              easing: "cubic-bezier(0.25, 1, 0.5, 1)",
            }}
          >
            {images.map((image, index) => (
              <SplideSlide key={index}>
                <img src={image} alt={`Slide ${index + 1}`} />
              </SplideSlide>
            ))}
          </Splide>
        </SplideContainer>
      )}
    </>
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

const LoadingState = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.3);
  z-index: 9999;
  display: flex;
  justify-content: center;
  align-items: center;

  .loading {
    width: 100px;
    height: 100px;
    border-radius: 50%;
    border: 10px solid #ddd;
    border-top-color: orange;
    animation: loading 1s linear infinite;
  }

  @keyframes loading {
    to {
      transform: rotate(360deg);
    }
  }
`;
