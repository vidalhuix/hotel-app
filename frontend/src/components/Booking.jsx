import './Booking.css';

export const Booking = () => {
  return (
    <div className='booking-container'>
      <div className='date-container'>
        <p>Arrive Date:</p>
        <select name="date" id="date" className='date'>
          <option value="">2024-05-29</option>
          <option value="">2024-05-30</option>
          <option value="">2024-05-31</option>
        </select>
      </div>

      <div className='guest-container'>
        <p>Choose number of guests:</p>
        <select name="guest" id="guest" className='guest'>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
        </select>
      </div>

      <button className='search'>Search</button>
      
    </div>
  )
}