import { BrowserRouter as Router } from "react-router-dom";
import { Nav } from "./components/Header/Nav";

export const App = () => {
  return (
    <Router>
      <>
        <Nav />
      </>
    </Router>
  );
};
