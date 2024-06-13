import { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Nav } from "./components/Header/Nav";
import { Login } from "./components/User/Login";
import { Register } from "./components/User/Register";
import { AuthProvider } from "./components/User/AuthContext";
import { UserPage } from "./components/User/UserPage";
import { Roomspage } from "./components/Rooms/Roomspage";
import ScrollToTop from "./components/ScrollToTop"; //this component makes all pages start from the top
import { BookingConfirm } from "./components/Booking/BookingConfirm";
import { BookingProvider } from "./components/Booking/BookingContext";
import { RoomResults } from './components/Booking/RoomResults';
import { AboutUs } from "./components/About";
import { ConferenceEvent } from './components/ConferenceEvent';
import {MainPage}from "./components/MainPage";

export const App = () => {
  const [rooms, setRooms] = useState([]);
  const [checkinDate, setCheckinDate] = useState(null);
  const [guests, setGuests] = useState(1);

  const onSearch = (date, guests) => {
    fetch(
      `https://sunside-hotel.onrender.com/hotelrooms/booking/date/${date}/guestamount/${guests}`
    )
      .then((response) => response.json())
      .then((data) => {
        setCheckinDate(date);
        setGuests(guests);
        setRooms(data);
      })
      .catch((error) => console.error("Error fetching data:", error));
  };

  return (
    <Router>
      <ScrollToTop />
      <AuthProvider>
        <BookingProvider>
          {" "}
          <Nav />
          <Routes>
            <Route path="/" element={<MainPage onSearch={onSearch} />} />
            <Route path="/login" element={<Login />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/register" element={<Register />} />
            <Route path="/hotelrooms" element={<Roomspage />} />
            <Route
              path="/bookingrooms"
              element={<RoomResults rooms={rooms} checkinDate={checkinDate} />}
            />
            <Route
              path="/bookingconfirm"
              element={<BookingConfirm guests={guests} />}
            />
            <Route path="/user-details" element={<UserPage />} />
            <Route path="/conference-event" element={<ConferenceEvent />} />
          </Routes>
        </BookingProvider>
      </AuthProvider>
    </Router>
  );
};