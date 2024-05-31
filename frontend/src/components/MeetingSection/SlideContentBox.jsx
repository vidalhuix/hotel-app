import styled from "styled-components";

export const SlideContentBox = ({
  imgSrc,
  imgAlt,
  title,
  description,
  linkText,
  linkHref,
}) => {
  return (
    <ItemContainer>
      <img src={imgSrc} alt={imgAlt} />
      <h3>{title}</h3>
      <p>{description}</p>
      <a href={linkHref}>{linkText}</a>
    </ItemContainer>
  );
};

const ItemContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: white;
  padding: 10px;
  width: 100%;
  /* @media (min-width: 1000px) {
    width: 500px;
  } */
  
  cursor: pointer;
  text-align: left;
  
  img {
    width: 100%;
    aspect-ratio: 14 / 9;
    object-fit: cover;
    transition: transform 400ms ease-in-out;
    @media (min-width: 1000px) {
      /* width: 500px; */
    }
    &:hover {
      transform: scale(1.05);
    }
  }

  h3 {
    margin: 0.5rem 0;
  }

  p {
    width: 90%;
    font-size: 0.7rem;
  }

  a {
    margin-top: 1rem;
    color: #ffffff;
    text-decoration: none;
    font-weight: bold;
  }

  a:hover {
    text-decoration: underline;
  }
`;
