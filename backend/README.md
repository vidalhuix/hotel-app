# Backend part of Final Project

This project includes the packages and babel setup for an express server, and is just meant to make things a little simpler to get up and running with.

## Getting Started

1.  Install the required dependencies using `npm install`.
2.  Start the development server using `npm run dev`.

## Generate the room-status array

```
const createRoomStatusArray = async() => {
    function generateDateArray(startDateStr, endDateStr) {
      const startDate = new Date(startDateStr);
      const endDate = new Date(endDateStr);
      const dateArray = [];

      for (let date = startDate; date <= endDate; date.setDate(date.getDate() + 1)) {
          dateArray.push(new Date(date));  // Ensure each date is a new instance
      }

      return dateArray;
    }

    // Generate dates from 2024-06-01 to 2025-06-01
    const startDate = "2024-06-05";
    const endDate = "2025-06-05";
    const dates = generateDateArray(startDate, endDate);

    // Array to hold the room and date combinations
    const roomDateArray = [];

    // Loop over roomIds
    for (let roomId = 1; roomId <= 7; roomId++) {
        // Loop over dates
        for (let date of dates) {
            roomDateArray.push({ roomId: roomId, date: new Date(date), status: 1 });
        }
    }

    const fs = require('fs');

    // Convert roomDateArray to a JSON string
    const jsonContent = JSON.stringify(roomDateArray, null, 2);

    // Write JSON string to a file
    fs.writeFile('data/room-status.json', jsonContent, (err) => {
        if (err) {
            console.error('Error writing file:', err);
        } else {
            console.log('File has been saved.');
        }
    });
  }

  createRoomStatusArray();
```
