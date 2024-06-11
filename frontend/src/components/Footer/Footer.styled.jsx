import styled from "styled-components";

//LIST --------------------------------------------------------------------------------

export const ListWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 20px;
  display: flex;
  align-items: center;
  text-transform: uppercase;
  @media (min-width: 1000px) {
    align-items: normal;
  }

  a {
    position: relative;
    color: #fff; /* Text color white */
    text-decoration: none;
    padding: 10px 0;
    font-size: 1rem;
    @media (min-width: 1000px) {
      margin-right: auto;
    }

    &::after {
      content: "";
      position: absolute;
      left: 0;
      width: 100%;
      height: 1px;
      bottom: 10px;
      background-color: #d3af97;

      transform: scaleX(0);
      transform-origin: right;
      transition: transform 250ms ease-in;
    }

    &:hover {
      color: #d3af97; /* Change color on hover */
    }

    &:hover::after {
      transform: scaleX(1);
      transform-origin: left;
    }
  }
`;

//FIND US LINKS--------------------------------------------------------------------------------

export const FindUsLink = ({ link, imgSrc, altText, labelFor, label }) => (
  <ContactLink href={link}>
    <IconImage className="no-rotate" src={imgSrc} alt={altText} />
  </ContactLink>
);

//CONTACT LINKS--------------------------------------------------------------------------------

export const ContactIcon = ({ link, imgSrc, altText, labelFor, label }) => (
  <ContactLink href={link}>
    <IconImage src={imgSrc} alt={altText} />
    <ContactLabel htmlFor={labelFor}>{label}</ContactLabel>
  </ContactLink>
);

const ContactLink = styled.a`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  text-decoration: none;
  color: inherit;

  .no-rotate{
    &:hover{
      transform: rotate(0deg);
      filter: invert(81%) sepia(17%) saturate(543%) hue-rotate(339deg);
    transform: scale(1.3);
    }
  }
`;

const IconImage = styled.img`
  width: 30px;
  height: 40px;
  margin: 10px; /* Space between image and label */
  margin-bottom: 5px;
  filter: invert(100%);
  transition: transform 250ms ease-in;

  &:hover {

      brightness(90%) contrast(83%); /* Change color on hover */
    transform: rotate(360deg);
  }
`;

const ContactLabel = styled.label`
  text-align: center;
  font-size: 0.8rem;
  color: #ffffff;
`;
