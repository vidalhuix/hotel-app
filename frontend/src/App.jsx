import { Footer } from "./components/Footer/Footer";
import { MeetingSection } from "./components/MeetingSection/MeetingSection";
import { SliderComp } from "./components/MeetingSection/SliderComp";
import { Restaurant } from "./components/Restaurant";
 

export const App = () => {

  return (
    <>
      <h1>Welcome to Final Project!</h1>
      <MeetingSection />
      <SliderComp />
      {/* I have added another section because the slider section have the same background as the footer */}
      <Restaurant /> 
      <Footer />
    </>
  );
};

