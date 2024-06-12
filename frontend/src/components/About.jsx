import React, { useState } from "react";
import LinkedInLogo from "/src/assets/logo-linkedin.svg";
import GithubLogo from "/src/assets/logo-github.svg";
import { LoadingSpinner } from "./LoadingSpinner.jsx";
import styled from "styled-components";

export const AboutUs = () => {
  const techStack = [
    "HTML5",
    "CSS3",
    "JavaScript",
    "React",
    "MongoDB",
    "Postman",
    "GitHub",
    "Authentication",
    "Express.js",
    "React Hooks",
    "Responsiveness",
    "Web Accessibility",
    "Styled Components",
    "Splidejs",
    "React Router",
    "Hash Link",
    "React Icons",
    "REST API",
    "Unsplash"
    ];
  const contactInfo = [
    {
      name: "Arnau Vidal",
      linkedin: "https://www.linkedin.com/in/arnau-vidal-4266a940/",
      github: "https://github.com/vidalhuix",
      portfolio: "https://arnaus-react-portafolio.netlify.app/",
      imgSrc:
        "https://arnaus-react-portafolio.netlify.app/assets/profile_pic-DhLhf60m.jpg",
    },
    {
      name: "Cornelia Dahlin",
      linkedin: "https://www.linkedin.com/in/cornelia-dahlin-940684295/",
      github: "https://github.com/lunek1",
      portfolio: "https://wondrous-sorbet-b71db8.netlify.app/",
      imgSrc:
        "https://media.licdn.com/dms/image/D4D03AQEHAtt3SlUKOQ/profile-displayphoto-shrink_800_800/0/1697014709384?e=1718236800&v=beta&t=Ikjt59Bq8qp6FoKDNJzLA2St8PS4ECaZKGMNb60D4OI",
    },
    {
      name: "Jing Huang",
      linkedin: "https://www.linkedin.com/in/jinghuangjh/",
      github: "https://github.com/jingh999",
      portfolio: "https://jinghuang.netlify.app/",
      imgSrc: "https://jinghuang.netlify.app/assets/portrait.jpg",
    },
  ];

  const [loading, setLoading] = useState(true);
  const handleImageLoad = () => setLoading(false);
  const handleImageError = () => setLoading(false);

  return (
    <Container>
      <ContactContainer>
        <h1>FINAL PROJECT</h1>
        <p>
          This full-stack application, is the last project at{" "}
          <a href="https://www.technigo.io/web-development-boot-camp">
            Technigo' Spring 2024 Web Development Bootcamp
          </a>{" "}
          ,this is a realistic simulation of an imaginary hotel. It enables
          users to book one of the available rooms based on their selected
          arrival and departure dates.
          <br />
          To complete a booking, users must register or log in if they already
          have an account.
          <br />
          Once logged in, users can view their registered bookings and delete
          their accounts if desired.
        </p>

        {/* <h3>TECH STACK & LIBRARIES</h3> */}
        <ul>
          {techStack.map((tech, index) => (
            <li key={index}>{tech}</li>
          ))}
        </ul>
        {/* <h3>TEAM</h3> */}
        <CardsContainer id="contact">
          {contactInfo.map((contact, index) => (
            <Card key={index}>
              <Front>
                {loading && <LoadingSpinner />}
                <img
                  src={contact.imgSrc}
                  alt={`${contact.name} image`}
                  onLoad={handleImageLoad}
                  onError={handleImageError}
                  style={{ display: loading ? "none" : "block" }}
                />
              </Front>
              <Back>
                <h3>{contact.name}</h3>
                <div>
                  <a href={contact.github}>
                    <img src={GithubLogo} alt="logo Github" />
                  </a>
                  <a href={contact.linkedin}>
                    <img src={LinkedInLogo} alt="logo LinkedIn" />
                  </a>
                </div>
              </Back>
            </Card>
          ))}
        </CardsContainer>
      </ContactContainer>
    </Container>
  );
};

const Container = styled.div`
  background-color: var(--color-darkgreen);
  height: 100%;
  color: white;
  min-height: 100vh;
`;
const ContactContainer = styled.div`
  max-width: 1000px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: auto;
  padding: 150px 10px;
  text-align: center;
  animation: slideDown 1.5s ease-in-out;
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
  @media all and (min-width: 744px) {
  }
  a {
    text-decoration: none;
    color: var(--color-gold);
  }
  p {
    max-width: 700px;
    text-align: left;
  }
  ul {
    list-style-type: none;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content:center;
    gap: 4px;
    padding: 0;
    li {
      font-size: 16px;
      padding: 2px 6px;
      color: var(--color-darkgreen);
      background-color: var(--color-gold);
    }
  }
`;
const CardsContainer = styled.div`
  max-width: 1000px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: center;
  @media (min-width: 1000px) {
    flex-direction: row;
  }
`;
const Card = styled.div`
  position: relative;
  width: 200px;
  height: 200px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  margin: 50px;
  transform-style: preserve-3d;
  transition: all 0.5s ease;

  &:hover {
    transform: rotateY(180deg);
  }
`;

const Front = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;

  > img {
    height: 100%;
    width: 100%;
    object-fit: cover;
    border-radius: 50%;
    transition: 500 linear;
    box-shadow: 17px 32px 13px 0px rgba(0, 0, 0, 0.12);
  }
`;
const Back = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
  transform: rotateY(180deg);
  background-color: white;
  color: var(--color-darkgreen);
  border-radius: 50%;
  box-shadow: 17px 32px 13px 0px rgba(0, 0, 0, 0.12);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  img {
    height: 50px;
    width: 50px;
    margin: 5px;
    filter: invert(27%) sepia(2%) saturate(3272%) hue-rotate(92deg)
      brightness(102%) contrast(81%);
    transition: transform 250ms ease-in;

    &:hover {
      filter: invert(81%) sepia(17%) saturate(543%) hue-rotate(339deg)
        brightness(90%) contrast(83%); /* Change color on hover */
      transform: scale(1.1);
    }
  }
`;
