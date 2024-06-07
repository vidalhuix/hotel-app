import React from 'react'
import styled from "styled-components";

const Container = styled.div`
  background-color: #44564c;
  height: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  padding-top:120px;
`;
const Room = styled.div`
    border: 1px solid #ccc;
    padding: 10px;
    margin-bottom: 10px;
    display: flex;
    flex-direction: column;
`;

export const RoomResults = ({ rooms }) => {
  const filterRoomsByType = (rooms) => {
    const roomMap = new Map();
    rooms.forEach((room) => {
        if (!roomMap.has(room.type)) {
            roomMap.set(room.type, room);
        }
    });
    return Array.from(roomMap.values());
};

const filteredRooms = filterRoomsByType(rooms);

  if (filteredRooms.length === 0) {
    return (
      <Container>
      <p>No rooms available for the selected date and guest amount.</p>
      </Container>
    );
  }

  return (
    <Container>
      <h1>Hello, Roomspage test!</h1>
      <div>
        {filteredRooms.map((room) => (
          <Room>
              <h2>Room: {room.type}</h2>
              <p>Price: {room.price} €</p>
              <p>Size: {room.size} m2</p>
              <p>Capacity: {room.capacity}</p>
              <p>{room.description}</p>
              <p>Facilities: {room.facilities}</p>

          </Room>
        ))}
      </div>
    </Container>
  )
}