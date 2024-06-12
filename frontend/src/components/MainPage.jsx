import { Hero } from "./Header/Hero";
import { BookingSection } from "./Booking/BookingSection";
import { MeetingSection } from "./MeetingSection/MeetingSection";
import { SliderComp } from "./MeetingSection/SliderComp";
import { Reviews } from "./Reviews";
import { Footer } from "./Footer/Footer";
import { BackToTopButton } from "./BackToTopButton";

export const MainPage = ({ onSearch }) => {
  return (
    <div>
      
      <Hero />
        <BookingSection onSearch={onSearch} />
      <MeetingSection />
      <SliderComp />
      <Reviews />
      <Footer />
      <BackToTopButton />
    </div>
  );
};
