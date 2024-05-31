import { BrowserRouter as Router } from "react-router-dom";
import { Nav } from "./components/Header/Nav";
import { Booking } from "./components/Booking";
import { Introduction } from "./components/Introduction";
import { Footer } from "./components/Footer/Footer";

import { MeetingSection } from "./components/MeetingSection/MeetingSection";
import { SliderComp } from "./components/MeetingSection/SliderComp";
import { Restaurant } from "./components/Restaurant";

export const App = () => {
  return (
    <Router>
        <Nav />
        <Booking />
        <Introduction />
        <MeetingSection />
        <SliderComp />
        {/* I have added another section because the slider section have the same background as the footer */}
        <Restaurant /> 
        <Footer />
    </Router>
  );
};