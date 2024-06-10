import styled from "styled-components";
import { Introduction } from '../Introduction'
import { Booking } from './Booking';

const BookingBox = styled.div`
  background-color: #f0f2f0;
  overflow: visible;
  width: 100%;
  margin-top: 0;
  margin-bottom: 0;
  padding-top: 64px;
  position: relative;
  box-sizing: border-box;
  top: -3em;
 
  @media all and (min-width: 744px) {
    max-height: 28em;
  }

  @media all and (min-width: 1024px) {
    padding-top: 144px;
    max-height: 30em;
  }
`

export const BookingSection = ({onSearch}) => {
  return (
    <BookingBox>
      <Booking onSearch={onSearch}/>
      <Introduction />
    </BookingBox>
  )
}