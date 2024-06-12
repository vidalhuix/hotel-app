import styled from "styled-components";
import { Register } from "../User/Register";
import { useLocation } from 'react-router-dom';
import exit from "../../assets/exit.png";
import enter from "../../assets/enter.png";
import guest from "../../assets/guest.png";

const Container = styled.div`
  background-color: #44564c;
  height: 100vh;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  color: white;
  padding: 20% 10%;
  h4{
    margin:0;
  }
`;

const SummaryContainer = styled.div`
  displaly: flex;
  flex-direction: column;
  width: 40%;
  margin-top:50px;
  background: white;
  color:  black;
  padding: 30px 40px 70px 50px;
  margin-right: 100px;
`

const TextBox = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 6px;
`

export const BookingConfirm = ({guests}) => {
  const location = useLocation();
  const { successMessage, roomType, checkinDate, checkoutDate, roomId } = location.state || {};
  return (
    <Container>
      <SummaryContainer>
        <h2>BOOKING SUMMARY</h2>
        <p>{successMessage}</p>
        {/* <p>roomId: {roomId}</p> */}
        <h4>Room type: {roomType}</h4> 
        <TextBox>
          <img
            src={enter}
            alt="Check-in"
            style={{ marginRight: "10px", width: "30px", height: "30px" }}
          />
          Check-in: {checkinDate} 
        </TextBox>
        <TextBox>
          <img
            src={exit}
            alt="Check-out"
            style={{ marginRight: "10px", width: "30px", height: "30px" }}
          />
          Check-out: {checkoutDate}
        </TextBox>
        <TextBox>
          <img
            src={guest}
            alt="Guests"
            style={{ marginRight: "10px", width: "30px", height: "30px" }}
          />  
          Guest: {guests}
        </TextBox>
      </SummaryContainer>
      <Register/>
    </Container>
  )
}