import styled from "styled-components";
import heroVideo from "../../assets/herovideo.mp4";

const HeroVideoContainer = styled.div`
  position: relative;
  top: 85px;
  left: 0;
  width: 100%;
  height: 80vh;
  overflow: hidden;
  margin-left: 0;
`;

const HeroVideo = styled.video`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const TextOverlayContainer = styled.div`
  position: relative;
  top: -340px;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 1000;
  text-align: center;
`;

const TextOverlay = styled.div`
  color: #ffffff;
  font-size: 72px;
  font-weight: 700;
  font-family: "Apercu", sans-serif;
  line-height: 0.9;
  animation: slideDown 1.5s ease-in-out;
  text-shadow: 2px 3px 5px rgba(0, 0, 0, 0.1);

  @keyframes slideDown {
    0% {
      transform: translateY(-300%);
      opacity: 0;
    }
    100% {
      transform: translateY(0);
      opacity: 1;
    }
  }
`;

export const Hero = () => {
  return (
    <>
      <HeroVideoContainer>
        <HeroVideo autoPlay loop muted>
          <source src={heroVideo} type="video/mp4" />
        </HeroVideo>
      </HeroVideoContainer>
      <TextOverlayContainer>
        <TextOverlay>
          WELCOME TO <br /> THE SUNSIDE HOTEL
        </TextOverlay>
      </TextOverlayContainer>
    </>
  );
};
