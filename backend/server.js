import express from "express";
import cors from "cors";
import mongoose from 'mongoose'
import expressListEndpoints from "express-list-endpoints";
import roomsData from "./data/hotel-room.json";
import dotenv from "dotenv"

dotenv.config()

const mongoUrl = process.env.MONGO_URL || "mongodb://localhost/flowershop"
mongoose.connect(mongoUrl)
mongoose.Promise = Promise

const Hotelrooms = mongoose.model("Hotelrooms", {
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

// Defines the port the app will run on. Defaults to 8080, but can be overridden
// when starting the server. Example command to overwrite PORT env variable value:
// PORT=9000 npm start
const port = process.env.PORT || 8080;
const app = express();

// Add middlewares to enable cors and json body parsing
app.use(cors());
app.use(express.json());

if (process.env.RESET_DB) {
  const seedDatabase = async () => {
    try {
      await Hotelrooms.deleteMany({});
      console.log("Database cleared");
      const savePromises = roomsData.map(room => new Hotelrooms(room).save());
      await Promise.all(savePromises);
      console.log("Database seeded with initial data");
    } catch (error) {
      console.error("Error seeding database:", error);
    }
  };
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

app.get("/hotelrooms/:startdate", async (req, res) => {
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

// Start the server
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});