import styled from "styled-components";
import { SlideContentBox } from "./SlideContentBox";
import { Splide, SplideTrack, SplideSlide } from "@splidejs/react-splide";
// Default theme
import "@splidejs/react-splide/css";
// import '@splidejs/react-splide/css/sea-green';

//See Splidejs.com documentation
export const SliderComp = () => {
  return (
    <SplideContainer>
      <Splide
        aria-label="Events and meetings"
        options={{
          type: "loop",
          perPage: 3,
          perMove: 1,
          autoplay: false,
          gap: 5,
          pauseOnHover: true,
          resetProgress: false,
          fixedWidth: "25rem",
          heightRatio: 0.3,
          focus: "center",
          padding: { left: "2rem", right: "2rem" },
          easing: "cubic-bezier(0.25, 1, 0.5, 1)",
          arrows: true,
        }}
      >
        <SplideSlide>
          <SlideContentBox
            imgSrc="/public/01-slide.jpg"
            imgAlt="Dinner table"
            title="Dinner & Breakfast"
            description=""
            linkText="read more"
            linkHref="#"
          />
        </SplideSlide>
        <SplideSlide>
          <SlideContentBox
            imgSrc="/public/02-slide.jpg"
            imgAlt="Dinner table"
            title="Dinner & Breakfast"
            description=""
            linkText="read more"
            linkHref="#"
          />
        </SplideSlide>
        <SplideSlide>
          <SlideContentBox
            imgSrc="/public/03-slide.jpg"
            imgAlt="Dinner table"
            title="Dinner & Breakfast"
            description=""
            linkText="read more"
            linkHref="#"
          />
        </SplideSlide>
        <SplideSlide>
          <SlideContentBox
            imgSrc="/public/04-slide.jpg"
            imgAlt="Dinner table"
            title="Dinner & Breakfast"
            description=""
            linkText="read more"
            linkHref="#"
          />
        </SplideSlide>
        <SplideSlide>
          <SlideContentBox
            imgSrc="/public/05-slide.jpg"
            imgAlt="Dinner table"
            title="Dinner & Breakfast"
            description=""
            linkText="read more"
            linkHref="#"
          />
        </SplideSlide>
      </Splide>
    </SplideContainer>
  );
};

const SplideContainer = styled.div`
  background-color: #44554b;
  padding: 16px;

  .splide__slide--focus {
    border: 2px solid #ff6600; /* Custom border for focused slide */
    box-shadow: 0 4px 8px rgba(0, 0, 0, 1); /* Custom shadow for focused slide */
    div {
      img {
        transform: scale(1.3);
        transition: transform 0.3s ease-in-out;
      }
    }
  }

  .splide__slide {
    transition: transform 0.3s ease-in-out;
  }

  .splide__track {
  height: 400px;
}
`;
