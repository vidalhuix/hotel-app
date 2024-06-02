import { BrowserRouter as Router } from "react-router-dom";
import { Nav } from "./components/Header/Nav";
import { Booking } from "./components/Booking";
import { Introduction } from "./components/Introduction";
import { Footer } from "./components/Footer/Footer";

import { MeetingSection } from "./components/MeetingSection/MeetingSection";
import { SliderComp } from "./components/MeetingSection/SliderComp";
import { Reviews } from "./components/Reviews";
import { BackToTopButton } from "./components/BackToTopButton";

export const App = () => {
  return (
    <Router>
      <Nav />
      <Booking />
      <Introduction />
      <MeetingSection />
      <SliderComp />
      <Reviews />
      <BackToTopButton />
      <Footer />
    </Router>
  );
};
