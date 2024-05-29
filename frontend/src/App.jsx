import { BrowserRouter as Router } from "react-router-dom";
import { Nav } from "./components/Header/Nav";
import { Booking } from "./components/Booking";
import { Introduction } from "./components/Introduction";
import { Footer } from "./components/Footer/Footer";

export const App = () => {
  return (
    <Router>
        <Nav />
        <Booking />
        <Introduction />
        <Footer />
    </Router>
  );
};