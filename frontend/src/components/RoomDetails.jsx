import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';

export const RoomDetails = () => {
  const { type } = useParams();
  const [room, setRoom] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchRoomData = async () => {
      try {
        const response = await fetch(`https://sunside-hotel.onrender.com/hotelrooms/${type}`);
        const data = await response.json();
        setRoom(data);
      } catch (error) {
        console.error('Error fetching room data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchRoomData();
  }, [type]);

  if (loading) {
    return <SpinnerContainer><Spinner /></SpinnerContainer>;
  }

  if (!room) {
    return <div>Room not found</div>;
  }

  return (
    <RoomContainer>
      <h2>{room.type}</h2>
      <img src={room.image} alt={room.type} />
      <p>{room.description}</p>
      <p><strong>Price:</strong> {room.price}</p>
      <p><strong>Size:</strong> {room.size}</p>
      <p><strong>Capacity:</strong> {room.capacity}</p>
      <p><strong>Facilities:</strong> {room.facilities.join(', ')}</p>
      <p><strong>Available Rooms:</strong> {room.availability[0].availableRooms}</p>
    </RoomContainer>
  );
};

const RoomContainer = styled.div`
  max-width: 800px;
  margin: 20px auto;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);

  img {
    max-width: 100%;
    height: auto;
    border-radius: 8px;
  }

  h2 {
    margin-bottom: 20px;
  }

  p {
    margin: 10px 0;
  }
`;

const SpinnerContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const Spinner = styled.div`
  border: 16px solid #f3f3f3; /* Light grey */
  border-top: 16px solid #3498db; /* Blue */
  border-radius: 50%;
  width: 120px;
  height: 120px;
  animation: spin 2s linear infinite;

  @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }
`;