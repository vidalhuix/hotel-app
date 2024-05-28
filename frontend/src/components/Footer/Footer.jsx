import styled from "styled-components";
import { ContactIcon, FindUsLink } from "./Footer.styled";

const StyledFooter = styled.footer`
  position: fixed;
  bottom: 0;
  margin-top: auto;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 5px;
  background-color: #44554b;
  color: rgb(255, 255, 255);
  width: 100%;
  font-family: Arial, Helvetica, sans-serif;
  font-size: 0.8rem;
  margin: auto;
`;

const ContactIconWrapper = styled.div`
  display: flex;
  align-items: center;
  margin: 10px;
`;

const NewsLetterContainer = styled.div`
  display:flex;
  flex-direction: column;

  small {
    font-weight: 100;
  }
`

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

    &::placeholder{
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
    background-color: #D3AF97;
    border: none;
    border-radius: 0 4px 4px 0;
    cursor: pointer;
    transition: ease 0.3s;
    
    &:hover {
      color: #5a675f;
      background-color: #fff;
    }
  }
  
`

export const Footer = () => {
  return (
    <StyledFooter>
      <NewsLetterContainer>
        <h2>NEWS LETTER</h2>
        <NewsLetter>
          <input type="Your email address" placeholder="E-mail"/>
          <button>Subscribe</button>
        </NewsLetter>
        <h5>Get montly news, stay updated.</h5>
      </NewsLetterContainer>
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
        <p>          
          Via del Mare 123 <br /> 80050, Cala Blu <br /> Isola di Itaca, Itaca
        </p>
      </ContactIconWrapper>
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
