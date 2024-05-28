import styled from "styled-components";

//LIST --------------------------------------------------------------------------------

export const ListWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  border-radius: 8px;
  width: 100%;
  margin: 20px;
  text-transform: uppercase;
  
  a {
    position: relative;
    color: #fff; /* Text color white */
    text-decoration: none;
    padding: 10px 0;
    font-size: 1rem;

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
    <IconImage src={imgSrc} alt={altText} />
  </ContactLink>
);

//CONTACT LINKS--------------------------------------------------------------------------------

const ContactLink = styled.a`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  text-decoration: none;
  color: inherit;
`;

const IconImage = styled.img`
  width: 30px; /* Adjust size as needed */
  height: 40px; /* Adjust size as needed */
  margin: 10px; /* Space between image and label */
  margin-bottom: 5px;
  filter: invert(100%);
  &:hover {
    transform: scale(1.1);
    transition: all ease 0.3s;
  }
`;

const ContactLabel = styled.label`
  text-align: center;
  font-family: sans-serif;
  font-size: 0.8rem;
  color: #ffffff; /* Adjust color as needed */
`;

export const ContactIcon = ({ link, imgSrc, altText, labelFor, label }) => (
  <ContactLink href={link}>
    <IconImage src={imgSrc} alt={altText} />
    <ContactLabel htmlFor={labelFor}>{label}</ContactLabel>
  </ContactLink>
);
