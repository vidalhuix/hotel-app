import { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Nav } from "./components/Header/Nav";
import { Login } from "./components/User/Login";
import { Register } from "./components/User/Register";
import { Roomspage } from "./components/Roomspage";
import { Hero } from "./components/Header/Hero";
import { Footer } from "./components/Footer/Footer";
import { MeetingSection } from "./components/MeetingSection/MeetingSection";
import { SliderComp } from "./components/MeetingSection/SliderComp";
import { Reviews } from "./components/Reviews";
import { BookingSection } from "./components/Booking/BookingSection";
import { RoomResults } from './components/Booking/RoomResults';

export const App = () => {
  const [rooms, setRooms] = useState([]);

    const onSearch = (date, guests) => {
      console.log({date})
      fetch(`https://sunside-hotel.onrender.com/hotelrooms/booking/date/${date}/guestamount/${guests}`)
          .then((response) => response.json())
          .then((data) => {
            setRooms(data);
          })
          .catch((error) => console.error('Error fetching data:', error));
    };

  return (
    <Router>
      <Nav />
      <Routes>
        <Route path="/" element={<MainPage onSearch={onSearch} />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/hotelrooms" element={<Roomspage/>} />
        <Route path="/bookingrooms" element={<RoomResults rooms={rooms}/>} />
      </Routes>
    </Router>
  );
};

const MainPage = ({onSearch}) => {
  return (
    <div>
      <Hero />
      <BookingSection onSearch={onSearch} />
      <MeetingSection />
      <SliderComp />
      <Reviews />
      <Footer />
    </div>
  );
};