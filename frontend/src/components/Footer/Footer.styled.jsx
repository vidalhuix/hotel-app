import styled from "styled-components";


//FIND US LINKS--------------------------------------------------------------------------------


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

