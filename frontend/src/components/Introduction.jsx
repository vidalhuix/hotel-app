import styled from "styled-components";

// Styling for the introduction container  z-index: 998;  margin-left: auto;margin-right: auto;padding-left: 20%;padding-right: 20%;

const IntroContainer = styled.div`
  width: 100%;
  padding: 60px 40px;
  text-align: center;
  background-color: #f0f2f0;
  font-family: "Apercu Pro", sans-serif;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  margin-top: 0;
  margin-bottom: -13%;
  position: relative;
  overflow: auto;

  @media all and (min-width: 744px) {
    top: -19em;
    padding: 160px 40px 60px 40px;
    height: 30em;
    margin-bottom: 0;
  }

  @media all and (min-width: 1025px) {
    padding: 100px;
    top: -18em;
    padding: 160px 40px 60px 40px;
    height: 36em;
    margin-bottom: 0;
  }
`;

// Styling for the introduction highlight text
const IntroHighlight = styled.div`
  color: #111112;
  margin-bottom: 30px;
  font-size: 18px;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  font-weight: 400;
  line-height: 1.2em;
  font-family: "Apercu Pro", sans-serif;
  font-style: normal; /* Ensure text is not italic or cursive */
  font-variant: normal;
`;

// Styling for the introduction title
const IntroTitle = styled.div`
  color: #44564c;
  letter-spacing: 0;
  text-transform: uppercase;
  margin-bottom: 20px;
  font-family: "Apercu Pro", sans-serif;
  font-size: 40px;
  font-weight: 700;

  @media all and (min-width: 744px) {
  }

  @media all and (min-width: 1024px) {
    font-size: 72px;
    line-height: 1em;
    margin-bottom: 26px;
  }
`;

// Styling for the introduction details
const IntroDetails = styled.div`
  margin-bottom: 20px;
  font-size: 18px;
  color: #111112;
  font-weight: 300;
  line-height: 1.5em;

  @media all and (min-width: 744px) {
  }

  @media all and (min-width: 1024px) {
    margin-bottom: 26px;
    font-weight: 400;
  }
`;

export const Introduction = () => {
  return (
    <IntroContainer>
      <IntroHighlight>25 MIN FROM STOCKHOLM</IntroHighlight>
      <IntroTitle>DISCOVER OUR IDYLL</IntroTitle>
      <IntroDetails>
        When you want to gather your colleagues and make important decisions,
        celebrate something important, or just leave town for a while. Then our
        historic charm, fantastic food and well-chosen drinks await ready in our
        inspiring manor environment.
      </IntroDetails>
    </IntroContainer>
  );
};
