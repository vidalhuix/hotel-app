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
      <DescriptionContainer>
        <h2>{title}</h2>
        <p>{description}</p>
        <a href={linkHref}>{linkText}</a>
      </DescriptionContainer>
    </ItemContainer>
  );
};

const ItemContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: left;
  color: white;
  padding: 10px;
  width: 100%;
  cursor: pointer;
  text-align: left;

  img {
    width: 100%;
    aspect-ratio: 14 / 9;
    object-fit: cover;
    transition: transform 400ms ease-in-out;

    &:hover {
      transform: scale(1.05);
    }
  }
`;

const DescriptionContainer = styled.div`
  display: inline;
  padding: 0 50px;
  @media (min-width: 400px) {
    padding: 0;
  }

  h2 {
    text-align: left;
    margin: 0;
    text-transform: uppercase;
    @media (min-width: 400px) {
      text-align: left;
    }
  }
  p {
    display: inline;
    margin: 0;
    padding: 0;
    width: auto;
    font-size: 1rem;
    margin-top: 3px;
  }

  a {
    display: inline;
    color: #ffffff;
    text-decoration: none;
    font-weight: bold;
    margin-left: 5px;
  }

  a:hover {
    text-decoration: underline;
  }
`;
