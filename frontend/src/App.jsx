import { BrowserRouter as Router } from "react-router-dom";
import { Nav } from "./components/Header/Nav";
import { Booking } from "./components/Booking";
import { Introduction } from "./components/Introduction";
import "./index.css";

export const App = () => {
  return (
    <Router>
        <Nav />
        <Booking />
        <Introduction />
    </Router>
  );
};