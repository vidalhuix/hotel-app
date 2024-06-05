import express from "express";
import cors from "cors";
import mongoose from 'mongoose'
import expressListEndpoints from "express-list-endpoints";
import roomsData from "./data/hotel-room.json";
import roomStatusData from "./data/room-status.json";
import dotenv from "dotenv";

dotenv.config()

const mongoUrl = process.env.MONGO_URL || "mongodb://localhost/flowershop"
mongoose.connect(mongoUrl)
mongoose.Promise = Promise

const Hotelrooms = mongoose.model("Hotelrooms", {
  id: Number,
  type: String,
  price: String,
  size: String,
  capacity: Number,
  numbers_of_rooms: Number,
  description: String,
  image: String,
  facilities: [String],
  availability: [{
    startDate: Date,
    endDate: Date,
    availableRooms: Number
  }]
});

const RoomStatus = mongoose.model("Roomstatus", {
  roomId: Number,
  date: Date,
  status: Number
});

// Defines the port the app will run on. Defaults to 8080, but can be overridden
// when starting the server. Example command to overwrite PORT env variable value:
// PORT=9000 npm start
const port = process.env.PORT || 8080;
const app = express();

// Add middlewares to enable cors and json body parsing
app.use(cors());
app.use(express.json());

if (+process.env.RESET_DB) {
  const seedDatabase = async () => {
    try {
      await Hotelrooms.deleteMany({});
      await RoomStatus.deleteMany({});
      console.log("Database cleared");
      const saveRoomPromises = roomsData.map(room => new Hotelrooms(room).save());
      const saveStatusPromises = roomStatusData.map(status => new RoomStatus(status).save());

      await Promise.all(saveRoomPromises, saveStatusPromises);
      console.log("Database seeded with initial data");
    } catch (error) {
      console.error("Error seeding database:", error);
    }
  };

  // const createRoomStatusArray = async() => {
  //   function generateDateArray(startDateStr, endDateStr) {
  //     const startDate = new Date(startDateStr);
  //     const endDate = new Date(endDateStr);
  //     const dateArray = [];
  
  //     for (let date = startDate; date <= endDate; date.setDate(date.getDate() + 1)) {
  //         dateArray.push(new Date(date));  // Ensure each date is a new instance
  //     }
  
  //     return dateArray;
  //   }
    
  //   // Generate dates from 2024-06-01 to 2025-06-01
  //   const startDate = "2024-06-05";
  //   const endDate = "2025-06-05";
  //   const dates = generateDateArray(startDate, endDate);
    
  //   // Array to hold the room and date combinations
  //   const roomDateArray = [];
    
  //   // Loop over roomIds
  //   for (let roomId = 1; roomId <= 7; roomId++) {
  //       // Loop over dates
  //       for (let date of dates) {
  //           roomDateArray.push({ roomId: roomId, date: new Date(date), status: 1 });
  //       }
  //   }

  //   const fs = require('fs');
    
  //   // Convert roomDateArray to a JSON string
  //   const jsonContent = JSON.stringify(roomDateArray, null, 2);
    
  //   // Write JSON string to a file
  //   fs.writeFile('data/room-status.json', jsonContent, (err) => {
  //       if (err) {
  //           console.error('Error writing file:', err);
  //       } else {
  //           console.log('File has been saved.');
  //       }
  //   });
  // }

  // createRoomStatusArray();

  seedDatabase();
}

app.use((req, res, next) => {
  if (mongoose.connection.readyState === 1) {
    next();
  } else {
    res.status(503).json({ error: "Service unavailable" });
  }
});

// Start defining your routes here
// http://localhost:8080/
app.get("/", (req, res) => {
  const endpoints = expressListEndpoints(app);
  res.json(endpoints)
});

app.get("/hotelrooms", async (req, res) => {
  try{
    const hotelrooms = await Hotelrooms.find();
    res.json(hotelrooms);
    } catch (error) {
      res.status(400).send("Rooms cannot be found.")
    }
});

app.get("/hotelrooms/:guestamount", async (req, res) => {
  try {
    const amount = parseInt(req.params.guestamount);
    const suitableRooms = await Hotelrooms.find({ capacity: { $gte: amount } });
    
    if (suitableRooms.length > 0) {
      res.json(suitableRooms);
    } else {
      return res.status(404).json({ error: 'No rooms found' });
    }
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.get("/hotelrooms/booking/:startdate", async (req, res) => {
  try {
    const startDate = req.params.startdate;
    const start = new Date(startDate);
    //const end = new Date(endDate);

    console.log(`Start Date: ${start}`);

    const availableRooms = await Hotelrooms.find({
      $and: [
        {"availability.startDate": { $lte: start }},
        {"availability.endDate": { $gte: start }},
        {"availability.availableRooms": { $gt: 0 }}
      ]
    });

    console.log(`Available Rooms: ${JSON.stringify(availableRooms)}`);

    if (availableRooms.length > 0) {
      res.json(availableRooms);
    } else {
      res.status(404).json({ error: 'No rooms found' });
    }
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// This endpoint is used to get room status on the given date
app.get("/hotelrooms/status/date/:date", async (req, res) => {
  try {
    const date = new Date(req.params.date);

    const availableRooms = await RoomStatus.find({
      $and: [
        {"date": { $eq: date }},
        //{"status": { $eq: 1 }}
      ]
    });

    if (availableRooms.length > 0) {
      res.json(availableRooms);
    } else {
      res.status(404).json({ error: 'No rooms found' });
    }
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});