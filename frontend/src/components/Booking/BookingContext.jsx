import { createContext, useState } from "react";

export const BookingContext = createContext();

export const BookingProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [bookingDetails, setBookingDetails] = useState({
    checkinDate: null,
    checkoutDate: null,
    guests: null,
  });

  return (
    <BookingContext.Provider value={{user, setUser, bookingDetails, setBookingDetails }}>
      {children}
    </BookingContext.Provider>
  );
};