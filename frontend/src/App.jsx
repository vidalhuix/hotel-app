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

export const App = () => {
  return (
    <Router>
      <Nav />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/hotelrooms" element={<Roomspage />} />
      </Routes>
    </Router>
  );
};

const MainPage = () => {
  return (
    <div>
      <Hero />
      <BookingSection/>
      <MeetingSection />
      <SliderComp />
      <Reviews />
      <Footer />
    </div>
  );
};