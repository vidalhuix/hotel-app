import styled from "styled-components";
import { ContactIcon, FindUsLink, ListWrapper } from "./Footer.styled";

const StyledFooter = styled.footer`
  position: fixed;
  bottom: 0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 50px 0 50px 0;
  background-color: #44554b;
  color: rgb(255, 255, 255);
  width: 100%;
  font-size: 0.8rem;
  margin: auto;
  gap: 30px;
`;

const StyledLogo = styled.a`
  img {
    display: none;
    filter: invert(100%);
    height: 70px;
    margin-top: 50px;
    margin-bottom: 20px;
  }

  /* Media query styles remain the same */
  @media (min-width: 1000px) {
    & > img {
      display: block;
    }
  }
`;

const ContactWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 20px;
  gap: 20px;
`;

const ContactIconWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const ContactTextWrapper = styled.div`
  text-align: center;
  display: flex;
  flex-direction: column;
  gap: 15px;

  p {
    line-height: 25px;
    margin: 0;
  }
  a {
    text-decoration: none;
    color: white;
  }
`;

const FooterBody = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  @media (min-width: 1000px) {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    align-items: start;
  }
`;

const NewsLetterContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 20px;
  h3 {
    font-size: 1rem;
    font-weight: normal;
    margin: 10px 0 10px 0;
  }
  h5 {
    font-weight: 100;
    margin: 10px 0 10px 0;
  }
`;

const NewsLetter = styled.div`
  display: flex;

  input {
    padding: 10px;
    font-size: 1rem;
    border: 0px solid #ccc;
    color: white;
    border-radius: 4px 0 0 4px;
    width: 100%;
    outline: none;
    background-color: #5a675f;

    &::placeholder {
      color: white;
    }

    &:focus {
      border-color: #007bff;
    }
  }

  button {
    padding: 10px;
    font-size: 1rem;
    color: #fff;
    background-color: #d3af97;
    border: none;
    border-radius: 0 4px 4px 0;
    cursor: pointer;
    
    &:hover {
      color: #5a675f;
      background-color: #fff;
      transform: scale(1.05) ;
    transition: all ease 0.3s;
    }
  }
`;

export const Footer = () => {
  return (
    <StyledFooter>
      <StyledLogo href="/">
        <img src="/public/svg/logo-hotel.svg" alt="Logo Hotel Itaca" />
      </StyledLogo>
      <FooterBody>
        <ListWrapper>
          <a href="/events&meetings">Events & Meeting</a>
          <a href="/rooms">Hotel Rooms</a>
          <a href="/about">About</a>
          <a href="/gallery">Gallery</a>
          <a href="/news">News</a>
        </ListWrapper>
        <NewsLetterContainer>
          <h3>NEWSLETTER</h3>
          <NewsLetter>
            <input type="Your email address" placeholder="E-mail" />
            <button>Subscribe</button>
          </NewsLetter>
          <h5>Get montly news, stay updated.</h5>
        </NewsLetterContainer>
        <ContactWrapper>
          <ContactIconWrapper>
            <FindUsLink
              link="https://www.facebook.com/"
              imgSrc="/public/svg/logo-facebook.svg"
              altText="Facebooks icon"
              target="_blank"
            />
            <FindUsLink
              link="https://www.instagram.com/"
              imgSrc="/public/svg/logo-instagram.svg"
              altText="Instagram icon"
              target="_blank"
            />
            <FindUsLink
              link="https://www.google.se/maps/place/Ithaca/@38.4019904,20.6084027,12z/data=!3m1!4b1!4m6!3m5!1s0x135d952249df9f5f:0x6acd8d9ffb56445a!8m2!3d38.4284603!4d20.6764877!16zL20vMGdtZzg?entry=ttu"
              imgSrc="/public/svg/logo-google-maps.svg"
              altText="Google maps icon"
              target="_blank"
            />
          </ContactIconWrapper>
          <ContactTextWrapper>
            <p>
              Via del Mare 123 <br />
              Itaca - 80050
            </p>
            <a href="tel:+12-345-✿678-❖90✦" class="text-white">
              +12-345-✿678-❖90✦
            </a>
            <a href="mailto:info@sastaholm.se" class="text-white">
              info@sunsidehotel.me
            </a>
          </ContactTextWrapper>
        </ContactWrapper>
      </FooterBody>
      <ContactIconWrapper>
        <ContactIcon
          link="/contact/arnau"
          imgSrc="/public/svg/smile-1.svg"
          altText="Arnaus's contact icon"
          labelFor="contact-arnau"
          label="Arnau"
        />
        <ContactIcon
          link="/contact/cornelia"
          imgSrc="/public/svg/smile-2.svg"
          altText="Cornelia's contact icon"
          labelFor="contact-arnau"
          label="Cornelia"
        />
        <ContactIcon
          link="/contact/jing"
          imgSrc="/public/svg/smile-3.svg"
          altText="Jings's contact icon"
          labelFor="contact-jing"
          label="Jing"
        />
      </ContactIconWrapper>
    </StyledFooter>
  );
};
