import styled from "styled-components";
import { Register } from "../User/Register";
import { useLocation } from 'react-router-dom';

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

const imageContainer = styled.div`
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    background: white;
  }
`

const SummaryContainer = styled.div`
  displaly: flex;
  flex-direction: column;
  width: 40%;
  margin-top:50px;
  background: white;
  color:  #44564c;
  padding: 30px 40px 70px 50px;
  margin-right: 100px;
`

const TextBox = styled.div`
  displaly: flex;
  flex-direction: column;
  margin-top: 6px;
`

export const BookingConfirm = () => {
  const location = useLocation();
  const { successMessage, roomType, checkinDate, checkoutDate, roomId } = location.state || {};
  return (
    <Container>
      <imageContainer>
      </imageContainer>
      <SummaryContainer>
        <h2>BOOKING SUMMARY</h2>
        <p>{successMessage}</p>
        {/* <p>roomId: {roomId}</p> */}
        <h4>Room type: {roomType}</h4> 
        <TextBox>
          Check-in: {checkinDate} 
        </TextBox>
        <TextBox>
          Check-out: {checkoutDate}
        </TextBox>
        <TextBox>
          Guest: 2
        </TextBox>
      </SummaryContainer>
      <Register/>
    </Container>
  )
}